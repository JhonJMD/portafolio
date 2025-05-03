import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    return <primitive object={scene} />;
}

const ModelViewer = () => {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden relative">
            <Canvas shadows>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />

                    <Model />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={1}
                        minPolarAngle={Math.PI / 2.5}
                        maxPolarAngle={Math.PI / 2.5}
                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-neutral-500 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full">
                Interactúa con el modelo 3D
            </div>
        </div>
    );
};

export default ModelViewer;