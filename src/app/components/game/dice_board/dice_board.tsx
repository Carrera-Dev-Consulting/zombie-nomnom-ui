import { DieModel, Face } from "@/app/game/die";
import Die from "../../die/die";

interface DiceBoardProps {
  dice: DieModel[];
  sorted: boolean;
}

export default function DiceBoard(props: DiceBoardProps) {
  return (
    <div>
      <CreateBoard dice={props.dice} sorted={props.sorted} />
    </div>
  );
}

export function CreateBoard(props: DiceBoardProps) {
  let diceArr = props.dice;
  if (props.sorted) {
    let sortedDice = props.dice.toSorted((a, b) => {
      if (a.face > b.face) {
        return 1;
      } else return -1;
    });
    diceArr = sortedDice;
  }
  let board = [];
  board.push(CreateRow(diceArr));
  return (
    <div className="flex-wrap flex-row flex transition-all">
      {board.map((ele) => ele)}
    </div>
  );
}

export function CreateRow(dice: DieModel[]) {
  return dice.map((die, i) => {
    return (
      <div className="m-2" key={i + die.color + die.face}>
        <Die die={die} height={100} width={100} />
      </div>
    );
  });
}
