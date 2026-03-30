import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Icosahedron } from '@react-three/drei';
import { Suspense } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/portfolioConfig';

function TechModel() {
    const { isDarkMode } = useTheme();
    
    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Icosahedron args={[1.2, 0]}>
                <meshStandardMaterial 
                    color={isDarkMode ? siteConfig.colors.secondary : siteConfig.colors.primary}
                    metalness={0.5} 
                    roughness={0.2} 
                />
            </Icosahedron>
            {/* Outer wireframe */}
            <Icosahedron args={[1.5, 1]}>
                <meshBasicMaterial 
                    color={siteConfig.colors.accent} 
                    wireframe 
                    transparent 
                    opacity={0.3} 
                />
            </Icosahedron>
        </Float>
    );
}

const ModelViewer = () => {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden relative">
            <Canvas shadows className="bg-transparent">
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <TechModel />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={2}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-neutral-500 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full shadow-md z-10 whitespace-nowrap">
                Interactúa con el modelo 3D
            </div>
        </div>
    );
};

export default ModelViewer;