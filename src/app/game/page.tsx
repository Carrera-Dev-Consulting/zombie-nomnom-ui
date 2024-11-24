"use client";
import Game from "../components/game/game";
import { ButtonItemProps } from "../components/game/options/options";
import PlayerList from "../components/player_list/player_list";
import { Color, DieModel, Face } from "./die";
import { PlayerModel } from "./player";

const gameOptions: ButtonItemProps[] = [
  {
    buttonName: "Roll for More",
    /**
     * @ignore
     */
    press: () => {},
  },

  {
    buttonName: "Eat brains",
    /**
     * @ignore
     */
    press: () => {},
  },
];

const dice: DieModel[] = [
  {
    color: Color.red,
    face: Face.shot,
  },
  {
    color: Color.yellow,
    face: Face.shot,
  },
  {
    color: Color.green,
    face: Face.shot,
  },
  {
    color: Color.red,
    face: Face.shot,
  },
  {
    color: Color.yellow,
    face: Face.shot,
  },
  {
    color: Color.green,
    face: Face.shot,
  },
  {
    color: Color.red,
    face: Face.shot,
  },
  {
    color: Color.yellow,
    face: Face.foot,
  },
  {
    color: Color.green,
    face: Face.shot,
  },
  {
    color: Color.red,
    face: Face.brain,
  },
  {
    color: Color.yellow,
    face: Face.brain,
  },
  {
    color: Color.green,
    face: Face.brain,
  },
];

const players: PlayerModel[] = [
  {
    name: "Milo",
    points: 10,
    current: true,
  },
  {
    name: "Dean",
    points: 0,
    current: false,
  },
  {
    name: "Xander",
    points: 5,
    current: false,
  },
];
const possiblePoints = 10;
const shots = 2;

export default function GamePage() {
  return (
    <div className="items-center justify-center font-[family-name:var(--font-geist-sans)] flex-col h-full w-full  md:text-xl sm:text-sm transition-all">
      <h1 className="justify-center items-center w-fulltext-xl text-center mt-2 h-[5%] w-full">
        Last round starts when the first player reaches 13 points or More!!
      </h1>
      <div className="flex flex-row ml-2w-full h-[95%] w-full">
        <div className="flex-2 w-[10%] h-full">
          <PlayerList players={players} />
        </div>
        <div className="flex-8 w-[90%] justify-center items-center mr-2 ml-14 h-full">
          <Game
            dice={dice}
            options={gameOptions}
            possiblePoints={possiblePoints}
            shot={shots}
          />
        </div>
      </div>
    </div>
  );
}
