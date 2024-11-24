interface OptionsProps {
  options: ButtonItemProps[];
}

export interface ButtonItemProps {
  buttonName: string;
  press: () => void;
}

export default function Options(props: OptionsProps) {
  return (
    <ul className="flex flex-row">
      {props.options.map((option) => {
        return (
          <li key={option.buttonName} className="mx-10 flex-1">
            <button
              className="hover:bg-red-900 hover:text-white text-black border-black border-2 rounded-xl font-bold w-36 h-11 md:w-36 sm:w-24 sm:text-sm md:text-md text-wrap transition-all"
              onClick={option.press}
            >
              {option.buttonName}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
