
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import { AtomModel } from './AtomModel';

interface QuantumSceneProps {
  className?: string;
}

export const QuantumScene = ({ className }: QuantumSceneProps) => {
  return (
    <div className={`w-full h-96 rounded-lg overflow-hidden ${className}`}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
          
          <AtomModel position={[0, 0, 0]} scale={1} />
          
          <Stars radius={100} depth={50} count={1000} factor={4} fade={true} speed={1} />
          <OrbitControls 
            enableZoom={true} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            maxDistance={20}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
