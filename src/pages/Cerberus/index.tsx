import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const name = (type: string) => `src/assets/obj/cerberus/Cerberus_${type}.jpg`;

function ObjCerberus() {
  const [colorMap] = useTexture([name("A")]);
  const obj = useLoader(OBJLoader, "src/assets/obj/cerberus/Cerberus.obj");
  return (
    <primitive object={obj} scale={3}>
      <meshStandardMaterial map={colorMap} />
    </primitive>
  );
}

export default function Cerberus() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <ObjCerberus />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
