import { PlayerModel } from "@/app/game/player";
import Player from "../player/player";

export interface PlayerProps {
  players: PlayerModel[];
}

export default function PlayerList(props: PlayerProps) {
  return (
    <div className="border-black border-2 rounded-2xl flex flex-col h-[90%] ml-3 w-full">
      <h3 className="p-2 justify-center items-center flex">Players</h3>
      <ul className="h-full flex-col ">
        {props.players.length == 0 ? (
          <p className="m-2 mx-5 flex">No Players</p>
        ) : (
          props.players.map((player) => {
            return (
              <li
                className="pl-2 h-[30%] content-center pr-2 "
                key={player.name}
              >
                <Player player={player} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
