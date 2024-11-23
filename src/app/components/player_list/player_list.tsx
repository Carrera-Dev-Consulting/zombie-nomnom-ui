import Player from "../player/player";

interface PlayerProps {
  Players: Player[];
}

export default function PlayerList(props: PlayerProps) {
  return (
    <div className="border-black border-2 rounded-2xl flex-col">
      <h3 className="p-2 items-center justify-center flex ">Players</h3>
      <ul className="flex flex-col">
        {props.Players.map((player) => {
          return (
            <li className="m-2 mx-5">
              <Player player={player} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
