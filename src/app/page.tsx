import Header from "./components/header";

const links = [
  { text: "Leaderboard", url: "/leaderboard" },
  { text: "About Us", url: "/about" },
];

const title = "Zombie Nom Nom";

export default function Page() {
  return (
    <div className="">
      <Header links={links} title={title} />
      <div>stuff</div>
    </div>
  );
}
