import Link from "next/link";

export interface HeaderProps {
  title: string;
  links: ListItemProps[];
}

export interface ListItemProps {
  text: string;
  url: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav className="flex bg-neutral-800 flex-row text-white py-3 w-full">
      <h1 className="flex-row font-medium text-4xl ml-4 ">
        <Link href="/">{props.title}</Link>
      </h1>
      <ul className="flex-2 flex text-2xl items-end ml-auto mr-4">
        {props.links.map((link) => {
          return <ListItem key={link.text} text={link.text} url={link.url} />;
        })}
      </ul>
    </nav>
  );
}

function ListItem(props: { text: string; url: string }) {
  return (
    <li className="mx-3 text-black bg-white rounded px-5 hover:bg-neutral-600 hover:text-white transition-all duration-500">
      <Link href={props.url}>{props.text}</Link>
    </li>
  );
}
