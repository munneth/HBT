"use client";

// src/Scene.tsx
import {
  Circle,
  Html,
  OrbitControls,
  Stats,
  useProgress,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}

const Scene: React.FC = () => {
  const gltf = useGLTF("/models/peterbilt_379.glb");

  // Close the hood
  React.useEffect(() => {
    gltf.scene.traverse((obj: any) => {
      const name = obj.name?.toLowerCase?.() || "";
      if (name.includes("hood") || name.includes("bonnet")) {
        obj.rotation.x = 0;
      }
    });
  }, [gltf]);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, 5, 25] }}
        shadows
        style={{ width: "800px", height: "600px" }}
      >
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive object={gltf.scene} position={[0, 1, 0]} />
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
