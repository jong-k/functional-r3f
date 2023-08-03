import { useMemo } from "react";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function Cerberus() {
  const obj = useLoader(OBJLoader, "src/assets/obj/cerberus/Cerberus.obj");
  const texture = useTexture("src/assets/obj/cerberus/Cerberus_R.jpg");

  const geometry = useMemo(() => {
    let g;
    obj.traverse((child) => {
      if (child.type === "Mesh") {
        const _c = child as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
