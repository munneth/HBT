// src/Scene.tsx
import {
  Circle,
  Html,
  OrbitControls,
  Stats,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}

const Scene: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/models/peterbilt_379.glb");

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{ position: [0, 5, 50] }}
        style={{ width: "100%", height: "700px" }}
      >
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <OrbitControls target={[0, 1, 0]} enableZoom={false} />
      </Canvas>
    </Suspense>
  );
};

export default Scene;
