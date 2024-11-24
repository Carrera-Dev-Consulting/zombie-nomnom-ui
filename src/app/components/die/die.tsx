import Image from "next/image";
import "./die.css";
import { Color, DieModel, Face } from "@/app/game/die";

export interface DieProps {
  die: DieModel;
  draw?: boolean;
}
let error = false;

export default function Die(props: DieProps) {
  let colorComponent = LoadColor(props.die.color);
  let faceComponent = LoadFace(props.die.face);
  if (!error && !props.draw) {
    return (
      <div className="relative m-1">
        {colorComponent} {faceComponent}
      </div>
    );
  } else {
    return DrawDie(props);
  }
}

export function LoadColor(color: Color) {
  let path = "";
  switch (color) {
    case Color.red:
      path = "/images/Red Die.png";
      break;
    case Color.yellow:
      path = "/images/Yellow Die.png";
      break;
    case Color.green:
      path = "/images/Green Die.png";
      break;
  }
  return (
    <Image
      className="absolute"
      src={path}
      alt={color}
      onError={() => (error = true)}
      width={200}
      height={200}
    />
  );
}

export function LoadFace(face: Face) {
  let path = "";
  switch (face) {
    case Face.brain:
      path = "/images/brain.png";
      break;
    case Face.shot:
      path = "/images/gun.png";
      break;
    case Face.feet:
      path = "/images/feet.png";
      break;
  }
  return (
    <Image
      src={path}
      alt={face}
      className="relative"
      onError={() => (error = true)}
      width={200}
      height={200}
    />
  );
}

export function DrawDie(props: DieProps) {
  return <div className="diamond">{props.die.face}</div>;
}
