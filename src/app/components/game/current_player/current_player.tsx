export interface CurrentPlayerProps {
  shots: number;
  possiblePoints: number;
}

export default function CurrentPlayer(props: CurrentPlayerProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>Possible Points: {props.possiblePoints}pts</div>
      <div>Shot {props.shots} Times</div>
    </div>
  );
}
