import { useMemo } from "react";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const DISPLACEMENT_MAP_SCALE = 2.436143;
const DISPLACEMENT_MAP_BIAS = -0.428408;

export default function Ninja() {
  const obj = useLoader(OBJLoader, "src/assets/obj/ninja/ninjaHead_Low.obj");
  const aoTexture = useTexture("src/assets/obj/ninja/ao.jpg");
  const displacementTexture = useTexture(
    "src/assets/obj/ninja/displacement.jpg",
  );
  const normalTexture = useTexture("src/assets/obj/ninja/normal.png");

  const geometry = useMemo(() => {
    let _g;
    obj.traverse((child) => {
      if (child.type === "Mesh") {
        const _c = child as Mesh;
        _g = _c.geometry;
      }
    });
    return _g;
  }, [obj]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        aoMap={aoTexture}
        displacementMap={displacementTexture}
        displacementScale={DISPLACEMENT_MAP_SCALE}
        displacementBias={DISPLACEMENT_MAP_BIAS}
        normalMap={normalTexture}
        map={normalTexture}
      />
    </mesh>
  );
}
