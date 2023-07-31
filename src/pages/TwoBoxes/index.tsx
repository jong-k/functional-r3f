import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import s from "./index.module.scss";
import Box from "../../components/mesh/Box";

export default function TwoBoxes() {
  return (
    <div className={s.canvasContaier}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-3, 0, 0]} />
        <Box position={[3, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
