import "./App.css";
import { TwitterFollowCard } from "./TwitterCard.jsx";

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="lapicito"
        name="Mario Zamora"
        name2="Mario-Z"
      />
      <TwitterFollowCard
        userName="mujer.jpg.jpg"
        name="Patricia Aburto"
        name2="Paty-Porn"
      />
      <TwitterFollowCard
        userName="MisHijas.jpg"
        name="Hijas"
        name2="Bendiciones"
      />
    </>
  );
}
