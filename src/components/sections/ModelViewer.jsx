import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Line } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';
import { scenePalette } from '../../config/portfolioConfig';

const NODE_COUNT = 9;
const ORBIT_RADIUS = 2.3;

// Evenly spread points on a sphere (Fibonacci lattice).
function sphereNodes(count, radius) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const angle = golden * i;
    return [Math.cos(angle) * ring * radius, y * radius, Math.sin(angle) * ring * radius];
  });
}

function Pulse({ target, color, offset, animated }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const progress = animated ? (clock.elapsedTime * 0.35 + offset) % 1 : 0.5;
    ref.current.position.set(target[0] * progress, target[1] * progress, target[2] * progress);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function AgentGraph({ animated }) {
  const { isDarkMode } = useTheme();
  const colors = scenePalette[isDarkMode ? 'dark' : 'light'];
  const group = useRef();
  const ringA = useRef();
  const ringB = useRef();
  const nodes = useMemo(() => sphereNodes(NODE_COUNT, ORBIT_RADIUS), []);

  useFrame((state, delta) => {
    if (!animated) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x += (state.pointer.y * 0.35 - group.current.rotation.x) * 0.04;
    ringA.current.rotation.z += delta * 0.25;
    ringB.current.rotation.z -= delta * 0.18;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[0.95, 1]}>
        <meshBasicMaterial color={colors.accent} wireframe transparent opacity={0.85} />
      </Icosahedron>
      <Icosahedron args={[0.5, 0]}>
        <meshStandardMaterial color={colors.accent2} emissive={colors.accent2} emissiveIntensity={0.6} roughness={0.3} metalness={0.4} />
      </Icosahedron>

      {nodes.map((position, index) => {
        const color = index % 2 === 0 ? colors.accent : colors.accent2;
        return (
          <group key={position.join(',')}>
            <Line points={[[0, 0, 0], position]} color={colors.dim} lineWidth={1} transparent opacity={0.7} />
            <mesh position={position}>
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
            <Pulse target={position} color={color} offset={index / NODE_COUNT} animated={animated} />
          </group>
        );
      })}

      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[ORBIT_RADIUS + 0.5, 0.012, 8, 160]} />
        <meshBasicMaterial color={colors.accent} transparent opacity={0.45} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.7, 0.5, 0]}>
        <torusGeometry args={[ORBIT_RADIUS + 0.9, 0.01, 8, 160]} />
        <meshBasicMaterial color={colors.accent2} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function ModelViewer({ animated = true }) {
  return (
    <div className="h-full w-full" role="img" aria-label="Grafo 3D de un agente de IA con nodos conectados">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={animated ? 'always' : 'demand'}
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[6, 6, 6]} intensity={30} />
        <AgentGraph animated={animated} />
      </Canvas>
    </div>
  );
}
