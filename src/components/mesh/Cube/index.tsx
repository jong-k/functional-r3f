import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RenderTexture, PerspectiveCamera, Text } from "@react-three/drei";
import Dodecahedron from "../Dodecahedron";

export default function Cube() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef<any>();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2),
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16} sourceFile>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color attach="background" args={["#00cee0"]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          {/* 한글 입력하면 깨짐.. */}
          <Text ref={textRef} fontSize={3} color="#444">
            Hello
          </Text>
          <Dodecahedron />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
