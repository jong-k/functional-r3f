import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cerberus from "../../components/mesh/Cerberus";

export default function CerberusObjTexture() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Cerberus />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
