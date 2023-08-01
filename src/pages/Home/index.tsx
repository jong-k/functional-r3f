import Header from "../../components/ui/Header";
import Board from "../../components/ui/Board";
import { BOARD_LIST } from "../../enums";
import s from "./index.module.scss";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Header content="React Three Fiber Playground" />
      <Board boardList={BOARD_LIST} />
    </div>
  );
}
