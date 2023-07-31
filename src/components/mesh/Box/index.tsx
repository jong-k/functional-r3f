import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
}

export default function Box({ position }: BoxProps) {
  // mesh 객체에 직접 접근하기 위해 사용
  const meshRef = useRef<Mesh>(null!);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // 컴포넌트가 render loop를 참조하게 하고 매 프레임마다 mesh를 회전시킴
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={isClicked ? 1.5 : 1}
      onClick={(prev) => setIsClicked(!prev)}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={isHovered ? "#1b5abf" : "#ffffff"} />
    </mesh>
  );
}
