import { useMemo, useState } from "react";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const OBJ_PATH = "src/assets/obj/cerberus/Cerberus.obj";
const TEXTURE_LIST = ["A", "M", "N", "R", "RM"] as const;
const GET_TEXTURE_PATH = (style: string) =>
  `src/assets/obj/cerberus/Cerberus_${style}.jpg`;

export default function Cerberus() {
  const [currentTextureIdx, setCurrentTextureIdx] = useState(0);
  const handleClick = () => {
    setCurrentTextureIdx((prev) => (prev + 1) % TEXTURE_LIST.length);
  };
  const obj = useLoader(OBJLoader, OBJ_PATH);
  const texture = useTexture(GET_TEXTURE_PATH(TEXTURE_LIST[currentTextureIdx]));

  const geometry = useMemo(() => {
    let _g;
    // loader 로 불러온 3d object의 프로퍼티를 순회
    obj.traverse((child) => {
      // Mesh 타입을 찾고
      if (child.type === "Mesh") {
        const _c = child as Mesh;
        // Mesh 타입의 geometry 를 반환
        _g = _c.geometry;
      }
    });
    return _g;
  }, [obj]);

  return (
    <mesh geometry={geometry} onClick={handleClick}>
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
