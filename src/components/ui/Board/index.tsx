import { BOARD_LIST } from "../../../enums";
import Card from "../Card";

interface BoardProps {
  boardList: typeof BOARD_LIST;
}

export default function Board({ boardList }: BoardProps) {
  return (
    <>
      {boardList.map((board) => (
        <Card key={board.ID} title={board.TITLE} />
      ))}
    </>
  );
}
