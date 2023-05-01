import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Rose = () => {
  const rose = useGLTF("./rose/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <ambientLight intensity={1} />
      <spotLight
        position={[-0.5, 18, -4]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={rose.scene} scale={1.15} position={[-0.3, 18.8, -3]} />
    </mesh>
  );
};

const RoseCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [1, 0, 5], fov: 75, zoom: 0.9 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Rose />
      </Suspense>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2 - 0.4}
        minAzimuthAngle={Math.PI * 2 - 0.7}
        maxAzimuthAngle={Math.PI * 2 + 0.7}
        enableZoom={false}
      />
      <Preload all />
    </Canvas>
  );
};

export default RoseCanvas;
