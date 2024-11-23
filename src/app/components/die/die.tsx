import Image from "next/image";
import "./die.css";
import { Color, DieModel, Face } from "@/app/game/die";

export interface DieProps {
  die: DieModel;
}
let error = false;

/**
 * Die displays a die.
 * If image is not provided, it renders a Die in a diamond shape with the color and face provided.
 * If image is provided, it renders an Image with the provided image and the face as alt text.
 * @param {DieProps} props
 * @returns A React component that displays the die.
 */
export default function Die(props: DieProps) {
  let colorComponent = LoadColor(props.die.color);
  let faceComponent = LoadFace(props.die.face);
  if (!error) {
    return (
      <div className="relative m-1">
        {colorComponent} {faceComponent}
      </div>
    );
  } else {
    return DrawDie(props);
  }
}

/**
 * Loads the image corresponding to the specified die color.
 * Returns an Image component with the source path based on the color.
 * Sets an error flag if the image fails to load.
 *
 * @param {Color} color - The color of the die.
 * @returns {JSX.Element} An Image component for the specified color.
 * @throws Will throw an error if the color is unknown.
 */
function LoadColor(color: Color) {
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
    default:
      throw new Error("Unknown color");
  }
  return (
    <Image
      className="absolute"
      src={path}
      alt={Color.red}
      onError={() => (error = true)}
      width={200}
      height={200}
    />
  );
}

/**
 * Loads the image corresponding to the specified die face.
 * Returns an Image component with the source path based on the face.
 * Sets an error flag if the image fails to load.
 *
 * @param {Face} face - The face of the die.
 * @returns {JSX.Element} An Image component for the specified face.
 * @throws Will throw an error if the face is unknown.
 */
function LoadFace(face: Face) {
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
    default:
      throw new Error("Unknown face");
  }
  return (
    <Image
      src={path}
      alt={Face.brain}
      className="relative"
      onError={() => (error = true)}
      width={200}
      height={200}
    />
  );
}

function DrawDie(props: DieProps) {
  return <div className="diamond">{props.die.face}</div>;
}
