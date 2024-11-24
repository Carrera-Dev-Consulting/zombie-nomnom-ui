import { DieModel } from "@/app/game/die";
import Die from "../../die/die";

interface DiceBoardProps {
  die: DieModel[];
}

export default function DiceBoard(props: DiceBoardProps) {
  return (
    <div className="flex flex-row">
      {props.die.map((die) => {
        return <Die key={die.face} die={die} />;
      })}
    </div>
  );
}
