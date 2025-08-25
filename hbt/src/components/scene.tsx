"use client";

// src/Scene.tsx
import {
  Circle,
  Html,
  OrbitControls,
  Stats,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}

function Model() {
  const gltf = useLoader(GLTFLoader, "/models/peterbilt_379.glb");
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}

const Scene: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading 3D Model...</div>;
  }

  return (
    <div style={{ width: "100%", height: "700px" }}>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading 3D Model...
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 5, 50] }}
          style={{ width: "100%", height: "100%" }}
        >
          <directionalLight
            position={[-1.3, 6.0, 4.4]}
            castShadow
            intensity={Math.PI * 1}
          />
          <Suspense fallback={<Loader />}>
            <Model />
          </Suspense>
          <OrbitControls target={[0, 1, 0]} enableZoom={false} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene;
