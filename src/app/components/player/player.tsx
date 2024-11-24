import { PlayerModel } from "../../game/player";

export interface PlayerProps {
  player: PlayerModel;
}

export default function Player(props: PlayerProps) {
  var player = props.player;
  return (
    <div
      className={
        "border-black border-2 rounded-lg justify-center items-center flex flex-col content-center " +
        (player.current ? "bg-green-200" : "bg-transparent")
      }
    >
      <div className="pt-2">{player.name}:</div>
      <div className="pb-2">{player.points}</div>
    </div>
  );
}
