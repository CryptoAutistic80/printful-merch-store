'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function OrbitingParticles() {
  const positions = useMemo(() => {
    const points = new Float32Array(1500);
    for (let i = 0; i < points.length; i += 3) {
      const radius = 1.2 + Math.random() * 1.5;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 1.2;
      points[i] = Math.cos(angle) * radius;
      points[i + 1] = height;
      points[i + 2] = Math.sin(angle) * radius;
    }
    return points;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <Points positions={positions} stride={3} ref={ref}>
      <PointMaterial size={0.02} color="#8efcfb" depthWrite={false} transparent opacity={0.5} />
    </Points>
  );
}

function PrismGlyph() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y += 0.4 * state.clock.getDelta();
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={[0.9, 1.2, 0.9]}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#f472ff" metalness={0.8} roughness={0.2} emissive="#9b5cf7" emissiveIntensity={0.4} />
      </mesh>
      <mesh scale={[0.95, 1.25, 0.95]}>
        <torusGeometry args={[1.6, 0.03, 32, 120]} />
        <meshBasicMaterial color="#a0f4ff" transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

interface HeroSceneProps {
  className?: string;
}

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-3, -3, -5]} intensity={0.5} color="#22d3ee" />
        <PrismGlyph />
        <OrbitingParticles />
      </Canvas>
    </div>
  );
}
