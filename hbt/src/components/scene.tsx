"use client";

// src/Scene.tsx
import { Circle, Html, OrbitControls, Stats, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

const Model: React.FC = () => {
  const gltf = useGLTF("/models/peterbilt_379.glb");
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={groupRef} object={gltf.scene} position={[0, 0, 0]} />;
};

const Scene: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        camera={{ position: [0, 5, 25] }}
        style={{ width: "100%", height: "700px" }}
      >
        <directionalLight position={[-1.3, 6.0, 4.4]} intensity={1} />
        <Model />
        <OrbitControls
          target={[0, 1, 0]}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </Suspense>
  );
};

export default Scene; // src/Scene.tsx
