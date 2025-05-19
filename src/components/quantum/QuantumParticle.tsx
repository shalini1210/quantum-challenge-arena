
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface QuantumParticleProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  speed?: number;
}

export const QuantumParticle = ({ 
  position = [0, 0, 0], 
  color = '#8B5CF6', 
  size = 0.5,
  speed = 1
}: QuantumParticleProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);
  const originalPosition = useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (!ref.current) return;
    
    time.current += state.clock.getDelta() * speed;
    
    // Quantum fluctuation effect
    ref.current.position.x = originalPosition.current.x + Math.sin(time.current) * 0.3;
    ref.current.position.y = originalPosition.current.y + Math.cos(time.current * 1.5) * 0.2;
    ref.current.position.z = originalPosition.current.z + Math.sin(time.current * 2) * 0.1;
    
    // Subtle pulsing effect
    const scale = 0.9 + Math.sin(time.current * 3) * 0.1;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <Sphere ref={ref} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};
