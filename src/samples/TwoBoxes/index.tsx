import { Canvas } from "@react-three/fiber";
import Box from "../../components/Box";

export default function TwoBoxes() {
  return (
    <>
      <h2>Hello from TwoBoxes</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Box />
      </Canvas>
    </>
  );
}
