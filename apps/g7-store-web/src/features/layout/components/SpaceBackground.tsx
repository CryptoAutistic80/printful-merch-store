'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Line, PointMaterial, Points } from '@react-three/drei';
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
      <PointMaterial size={0.02} transparent color="#8be7ff" depthWrite={false} opacity={0.35} />
    </Points>
  );
}

const nebulaVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
  }
`;

const nebulaFragmentShader = `
  uniform float uTime;
  uniform vec3 uColorOne;
  uniform vec3 uColorTwo;
  uniform vec3 uColorThree;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      p *= 1.7;
      amplitude *= 0.55;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv * 3.0;
    float pattern = fbm(uv + uTime * 0.05);
    float glow = smoothstep(0.2, 0.8, pattern);

    vec3 nebula = mix(uColorOne, uColorTwo, glow);
    nebula = mix(nebula, uColorThree, smoothstep(0.5, 0.95, pattern));

    float halo = smoothstep(0.0, 0.5, pattern) * 0.35;
    nebula += vec3(0.1, 0.05, 0.15) * halo;

    gl_FragColor = vec4(nebula, 0.55);
  }
`;

function NebulaVeil() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorOne: { value: new THREE.Color('#1C2541') },
      uColorTwo: { value: new THREE.Color('#2FC7BB') },
      uColorThree: { value: new THREE.Color('#F88379') },
    }),
    [],
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh position={[0, 0, -3]}>
      <planeGeometry args={[20, 12]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        fragmentShader={nebulaFragmentShader}
        vertexShader={nebulaVertexShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

const orbCount = 28;

function FloatingOrbs() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const orbs = useMemo(
    () =>
      new Array(orbCount).fill(null).map((_, index) => ({
        radius: 1.4 + Math.random() * 1.4,
        speed: 0.08 + Math.random() * 0.12,
        offset: Math.random() * Math.PI * 2,
        verticalDrift: (Math.random() - 0.5) * 0.8,
        scale: 0.015 + Math.random() * 0.03,
        colorShift: index / orbCount,
      })),
    [],
  );

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.elapsedTime;
    orbs.forEach((orb, index) => {
      const angle = t * orb.speed + orb.offset;
      const x = Math.cos(angle) * orb.radius * 0.8;
      const y = Math.sin(angle * 0.7) * 0.6 + orb.verticalDrift;
      const z = Math.sin(angle) * orb.radius * 0.2 - 1.5;
      dummy.position.set(x, y, z);
      const scale = orb.scale * (1 + Math.sin(t * 0.5 + orb.offset) * 0.3);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
      const color = new THREE.Color('#2FC7BB').lerp(new THREE.Color('#EBD0E3'), orb.colorShift).multiplyScalar(0.85);
      mesh.setColorAt(index, color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, orbCount]}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial emissiveIntensity={0.6} emissive="#ffffff" transparent opacity={0.35} />
    </instancedMesh>
  );
}

function Threads() {
  const lines = useMemo(
    () => [
      {
        points: [
          new THREE.Vector3(-2.5, -0.6, -1.5),
          new THREE.Vector3(-1.2, 0.2, -1.0),
          new THREE.Vector3(0, 0.4, -0.8),
          new THREE.Vector3(1.4, -0.3, -0.6),
          new THREE.Vector3(2.0, -1.2, -0.2),
        ],
        color: '#2FC7BB',
      },
      {
        points: [
          new THREE.Vector3(-1.8, 0.9, -1.6),
          new THREE.Vector3(-0.6, 1.1, -1.2),
          new THREE.Vector3(0.8, 0.3, -0.7),
          new THREE.Vector3(1.5, -0.4, -0.3),
          new THREE.Vector3(2.3, -1.5, 0.1),
        ],
        color: '#F88379',
      },
      {
        points: [
          new THREE.Vector3(-2.2, -1.5, -1.4),
          new THREE.Vector3(-1.6, -0.5, -1.0),
          new THREE.Vector3(-0.3, 0.2, -0.8),
          new THREE.Vector3(0.7, -0.4, -0.5),
          new THREE.Vector3(1.6, -1.8, -0.2),
        ],
        color: '#F5D663',
      },
    ],
    [],
  );

  return (
    <>
      {lines.map((line, index) => (
        <Line
          key={index}
          points={line.points}
          color={line.color}
          lineWidth={1}
          transparent
          opacity={0.35}
          dashed
          dashSize={0.2}
          gapSize={0.3}
        />
      ))}
    </>
  );
}

export function SpaceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]}>
        <color attach="background" args={['#09071A']} />
        <fog attach="fog" args={['#050214', 6, 18]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 4, 2]} intensity={0.8} color="#F88379" />
        <pointLight position={[-5, -3, -2]} intensity={0.6} color="#2FC7BB" />
        <NebulaVeil />
        <FloatingOrbs />
        <Threads />
        <StarField />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,113,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(47,199,187,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(49,46,97,0.65),rgba(6,2,18,0.4)_45%,rgba(1,0,8,0.85))]" />
    </div>
  );
}
