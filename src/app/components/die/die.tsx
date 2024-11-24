"use client";
import Image from "next/image";
import "./die.css";
import { Color, DieModel, Face } from "@/app/game/die";

export interface DieProps {
  die: DieModel;
  draw?: boolean;
  width: number;
  height: number;
}
let error = false;

export default function Die(props: DieProps) {
  let colorComponent = LoadColor(props);
  let faceComponent = LoadFace(props);
  if (!error && !props.draw) {
    return (
      <div className="relative aspect-square ">
        {colorComponent} {faceComponent}
      </div>
    );
  } else {
    return DrawDie(props);
  }
}

export function LoadColor(props: DieProps) {
  let path = "";
  switch (props.die.color) {
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
      className="absolute object-cover object-center aspect-square"
      src={path}
      alt={props.die.color}
      onError={() => (error = true)}
      width={props.width}
      height={props.height}
    />
  );
}

export function LoadFace(props: DieProps) {
  let path = "";
  switch (props.die.face) {
    case Face.brain:
      path = "/images/brain.png";
      break;
    case Face.shot:
      path = "/images/gun.png";
      break;
    case Face.foot:
      path = "/images/feet.png";
      break;
  }
  return (
    <Image
      src={path}
      alt={props.die.face}
      className="relative object-cover object-center transition-all aspect-square"
      onError={() => (error = true)}
      width={props.width}
      height={props.height}
    />
  );
}

export function DrawDie(props: DieProps) {
  return <div className="diamond">{props.die.face}</div>;
}
