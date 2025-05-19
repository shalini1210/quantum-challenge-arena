
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { QuantumParticle } from './QuantumParticle';
import { ElectronOrbit } from './ElectronOrbit';
import * as THREE from 'three';

interface AtomModelProps {
  position?: [number, number, number];
  scale?: number;
  nucleusColor?: string;
  orbitColors?: string[];
}

export const AtomModel = ({
  position = [0, 0, 0],
  scale = 1,
  nucleusColor = '#8B5CF6',
  orbitColors = ['#3B82F6', '#EC4899', '#10B981']
}: AtomModelProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle rotation of entire atom
    groupRef.current.rotation.y += 0.001;
    groupRef.current.rotation.z += 0.0005;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Nucleus */}
      <QuantumParticle color={nucleusColor} size={0.8} />
      
      {/* Electron orbits */}
      <ElectronOrbit 
        radius={2} 
        color={orbitColors[0]} 
        rotationSpeed={0.8} 
        axisRotation={[1, 0, 0]} 
      />
      <ElectronOrbit 
        radius={3} 
        color={orbitColors[1]} 
        rotationSpeed={0.5} 
        axisRotation={[0, 1, 0]} 
      />
      <ElectronOrbit 
        radius={4} 
        color={orbitColors[2]} 
        rotationSpeed={0.3} 
        axisRotation={[0.5, 0.5, 0]} 
      />
    </group>
  );
};
