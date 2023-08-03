import Header from "../../components/ui/Header";
import Board from "../../components/ui/Board";
import { BOARD_LIST } from "../../enums";

export default function Home() {
  return (
    <>
      <Header content="React Three Fiber Playground" />
      <Board boardList={BOARD_LIST} />
    </>
  );
}
