import Player from "../player/player";

interface PlayerProps {
  players: Player[];
}

export default function PlayerList(props: PlayerProps) {
  return (
    <div className="border-black border-2 rounded-2xl flex-col">
      <h3 className="p-2 items-center justify-center flex ">Players</h3>
      <ul className="flex flex-col">
        {props.players.length == 0 ? (
          <p className="m-2 mx-5 flex justify-center">No Players</p>
        ) : (
          props.players.map((player) => {
            return (
              <li className="m-2 mx-5" key={player.name}>
                <Player player={player} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
