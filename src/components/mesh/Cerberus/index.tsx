import { useMemo, useState } from "react";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const TEXTURE_LIST = ["A", "M", "N", "R", "RM"] as const;
const GET_TEXTURE_PATH = (style: string) =>
  `src/assets/obj/cerberus/Cerberus_${style}.jpg`;

export default function Cerberus() {
  const [currentTextureIdx, setCurrentTextureIdx] = useState(0);
  const handleClick = () => {
    setCurrentTextureIdx((prev) => (prev + 1) % TEXTURE_LIST.length);
  };
  const obj = useLoader(OBJLoader, "src/assets/obj/cerberus/Cerberus.obj");
  const texture = useTexture(GET_TEXTURE_PATH(TEXTURE_LIST[currentTextureIdx]));

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
    <mesh geometry={geometry} onClick={handleClick}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
