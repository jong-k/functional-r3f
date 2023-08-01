import { BOARD_LIST } from "../../../enums";
import Card from "../Card";
import s from "./index.module.scss";

interface BoardProps {
  boardList: typeof BOARD_LIST;
}

export default function Board({ boardList }: BoardProps) {
  return (
    <div className={s.wrapper}>
      {boardList.map((board) => (
        <Card key={board.ID} title={board.TITLE} linkTo={board.LINK} />
      ))}
    </div>
  );
}
