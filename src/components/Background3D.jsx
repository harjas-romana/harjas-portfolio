import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

function HighTechWireframeMesh() {
  const meshRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const geometry = useMemo(() => new THREE.PlaneGeometry(100, 100, 80, 80), []);
  const initialPositions = useMemo(() => new Float32Array(geometry.attributes.position.array), [geometry]);

  useFrame((state) => {
    if (document.hidden) return;
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime * 0.3;
    const positions = meshRef.current.geometry.attributes.position.array;

    // Create a very sharp, angular, geometric noise
    for (let i = 0; i < positions.length; i += 3) {
      const x = initialPositions[i];
      const y = initialPositions[i + 1];

      // Clinical mathematical wave
      const waveX = Math.sin(x * 0.15 + time) * 1.5;
      const waveY = Math.cos(y * 0.15 + time) * 1.5;

      positions[i + 2] = waveX + waveY;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Scroll Physics: Camera flying forward through the grid
    const targetZ = scrollYProgress.get() * 30;
    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      targetZ,
      0.05
    );

    meshRef.current.rotation.x = -(Math.PI / 2.3);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -12, -30]}>
      <meshBasicMaterial
        color="#0A34FF" // Electric Ultramarine highlight
        wireframe={true}
        transparent={true}
        opacity={0.12} // Very faint, clinical lines
      />
    </mesh>
  );
}

function StructuralBackplane() {
  const meshRef = useRef(null);
  const geometry = useMemo(() => new THREE.PlaneGeometry(120, 120, 40, 40), []);
  const initialPositions = useMemo(() => new Float32Array(geometry.attributes.position.array), [geometry]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * 0.1;
    const positions = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = initialPositions[i];
      const y = initialPositions[i + 1];
      positions[i + 2] = Math.sin(x * 0.05 - time) * 2 + Math.cos(y * 0.05 + time) * 2;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.x = -(Math.PI / 2.1);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -20, -40]}>
      <meshBasicMaterial
        color="#A1A1AA" // Zinc/Silver
        wireframe={true}
        transparent={true}
        opacity={0.1}
      />
    </mesh>
  );
}

export default function Background3D() {
  return (
    // Pure Alabaster Background
    <div className="fixed inset-0 z-[-1] bg-bg-base pointer-events-none">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        {/* Fog perfectly matches Alabaster to blend the edges of the grid */}
        <fog attach="fog" args={['#F8F9FA', 20, 60]} />

        <HighTechWireframeMesh />
        <StructuralBackplane />
      </Canvas>
    </div>
  );
}