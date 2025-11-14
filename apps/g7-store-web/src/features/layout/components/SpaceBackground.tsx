'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function StarField() {
  const positions = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < points.length; i += 3) {
      const radius = 2 + Math.random() * 6;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4;
      points[i] = Math.cos(angle) * radius;
      points[i + 1] = y;
      points[i + 2] = Math.sin(angle) * radius;
    }
    return points;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <Points positions={positions} stride={3} ref={ref}>
      <PointMaterial size={0.02} transparent color="#8be7ff" depthWrite={false} opacity={0.5} />
    </Points>
  );
}

export function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={['#030113']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[6, 4, 2]} intensity={0.6} color="#f472ff" />
        <pointLight position={[-5, -3, -2]} intensity={0.4} color="#22d3ee" />
        <StarField />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(233,76,255,0.25),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.2),transparent_50%)]" />
    </div>
  );
}
