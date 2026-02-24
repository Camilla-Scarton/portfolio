import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { isWebGLAvailable } from "../../utils/webgl";
import { roseFallback } from "../../assets";

const Rose = ({ isMobile }) => {
  const rose = useGLTF("/portfolio/rose/scene.gltf");
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
      <primitive
        object={rose.scene}
        scale={1.15}
        position={[isMobile ? 0 : -0.1, 18.75, -3]}
      />
    </mesh>
  );
};

const RoseCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Check for WebGL support
    setWebGLSupported(isWebGLAvailable());

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (evt) => setIsMobile(evt.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [])

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={roseFallback}
          alt="Rose"
          className="w-full h-full object-contain pointer-events-none select-none"
          style={{
            maxWidth: '55%',
            maxHeight: '55%',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [1, 0, 5], fov: 75, zoom: 0.9 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        alpha: true,
        antialias: false // Optimization for potentially problematic GPUs
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={isMobile ? Math.PI / 2 - 0.3 : Math.PI / 2 - 0.4}
          minAzimuthAngle={isMobile ? Math.PI * 2 : Math.PI * 2 - 0.7}
          maxAzimuthAngle={isMobile ? Math.PI * 2 + 0.5 : Math.PI * 2 + 0.7}
          enableZoom={false}
        />
        <Rose isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RoseCanvas;
