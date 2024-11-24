interface OptionsProps {
  options: ButtonItemProps[];
}

export interface ButtonItemProps {
  buttonName: string;
  callback: () => void;
}

export default function Options(props: OptionsProps) {
  return (
    <ul className="flex flex-row">
      {props.options.map((option) => {
        return (
          <li key={option.buttonName} className="mr-5">
            <button
              className="hover:bg-red-900 hover:text-white text-black border-black border-2 rounded-xl font-bold py-1 px-1"
              onClick={option.callback}
            >
              {option.buttonName}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
