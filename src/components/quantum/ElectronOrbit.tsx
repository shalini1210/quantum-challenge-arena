
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface ElectronOrbitProps {
  radius?: number;
  color?: string;
  electronColor?: string;
  rotationSpeed?: number;
  axisRotation?: [number, number, number];
}

export const ElectronOrbit = ({
  radius = 2,
  color = '#3B82F6',
  electronColor = '#EC4899',
  rotationSpeed = 1,
  axisRotation = [0, 0, 0]
}: ElectronOrbitProps) => {
  const orbitRef = useRef<THREE.Group>(null);
  const electronRef = useRef<THREE.Mesh>(null);
  const electronTime = useRef(Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (!orbitRef.current || !electronRef.current) return;
    
    electronTime.current += state.clock.getDelta() * rotationSpeed;
    
    // Electron moves along the orbit
    electronRef.current.position.x = Math.cos(electronTime.current) * radius;
    electronRef.current.position.z = Math.sin(electronTime.current) * radius;
    
    // Orbit slowly rotates
    orbitRef.current.rotation.x += 0.001 * axisRotation[0];
    orbitRef.current.rotation.y += 0.001 * axisRotation[1];
    orbitRef.current.rotation.z += 0.001 * axisRotation[2];
  });

  // Create orbit path
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  return (
    <group ref={orbitRef}>
      <Line
        points={points}
        color={color}
        lineWidth={1}
        opacity={0.7}
        transparent
      />
      <Sphere ref={electronRef} args={[0.2, 16, 16]} position={[radius, 0, 0]}>
        <meshStandardMaterial
          color={electronColor}
          emissive={electronColor}
          emissiveIntensity={1}
        />
      </Sphere>
    </group>
  );
};
