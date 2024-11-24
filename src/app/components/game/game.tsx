import DiceBoard from "./dice_board/dice_board";
import Options, { ButtonItemProps } from "./options/options";
import CurrentPlayer from "./current_player/current_player";
import { DieModel } from "@/app/game/die";

export interface GameProps {
  shot: number;
  possiblePoints: number;
  options: ButtonItemProps[];
  dice: DieModel[];
}

export default function Game(props: GameProps) {
  return (
    <div className="flex flex-col border-2 border-black rounded-xl justify-center items-center pt-10 pb-20 px-6">
      <CurrentPlayer possiblePoints={props.possiblePoints} shots={props.shot} />
      <div className="mt-10 mb-16">
        <Options options={props.options} />
      </div>
      <DiceBoard dice={props.dice} sorted={true} />
    </div>
  );
}
