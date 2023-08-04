import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ninja from "../../components/mesh/Ninja";

export default function NinjaObjTexture() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 10]} />
      <Suspense fallback={null}>
        <Ninja />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
