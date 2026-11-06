import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { scenePalette } from '../../config/portfolioConfig';

const BOUNDS = { x: 9, y: 5.5, z: 3 };
const LINK_DISTANCE = 2.3;
const MAX_SEGMENTS_PER_NODE = 4;

function Network({ count, animated }) {
  const { isDarkMode } = useTheme();
  const colors = scenePalette[isDarkMode ? 'dark' : 'light'];
  const pointer = useRef({ x: 0, y: 0 });
  const pointsRef = useRef();
  const linesRef = useRef();

  const maxSegments = count * MAX_SEGMENTS_PER_NODE;
  const { positions, velocities, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * BOUNDS.x * 2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2;
      vel[i * 3] = (Math.random() - 0.5) * 0.006;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.006;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return { positions: pos, velocities: vel, linePositions: new Float32Array(maxSegments * 6) };
  }, [count, maxSegments]);

  useEffect(() => {
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state) => {
    const limits = [BOUNDS.x, BOUNDS.y, BOUNDS.z];
    if (animated) {
      for (let i = 0; i < count * 3; i += 1) {
        positions[i] += velocities[i];
        if (Math.abs(positions[i]) > limits[i % 3]) velocities[i] *= -1;
      }
    }

    let segments = 0;
    const maxDistanceSq = LINK_DISTANCE * LINK_DISTANCE;
    for (let i = 0; i < count && segments < maxSegments; i += 1) {
      for (let j = i + 1; j < count && segments < maxSegments; j += 1) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < maxDistanceSq) {
          linePositions.set(positions.subarray(i * 3, i * 3 + 3), segments * 6);
          linePositions.set(positions.subarray(j * 3, j * 3 + 3), segments * 6 + 3);
          segments += 1;
        }
      }
    }

    const lineGeometry = linesRef.current.geometry;
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.setDrawRange(0, segments * 2);
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (animated) {
      const camera = state.camera;
      camera.position.x += (pointer.current.x * 0.8 - camera.position.x) * 0.03;
      camera.position.y += (pointer.current.y * 0.5 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} usage={THREE.DynamicDrawUsage} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color={colors.accent} transparent opacity={isDarkMode ? 0.9 : 0.7} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linePositions} count={maxSegments * 2} itemSize={3} usage={THREE.DynamicDrawUsage} />
        </bufferGeometry>
        <lineBasicMaterial color={colors.accent2} transparent opacity={isDarkMode ? 0.28 : 0.3} />
      </lineSegments>
    </>
  );
}

export default function BackgroundScene({ animated = true }) {
  const count = useMemo(() => (window.innerWidth < 768 ? 36 : 80), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={animated ? 'always' : 'demand'}
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      >
        <Network count={count} animated={animated} />
      </Canvas>
    </div>
  );
}
