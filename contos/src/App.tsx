import { Creatures } from "./components/cardCreature/CardCreature";
import { FlashCard } from "./components/flashCard/flashCard";
import Header from "./components/header/Header";
import Infor from "./components/infor/Infor";

function App() {
  return (
    <>
      <Header />
      <FlashCard />
      <Creatures />
      <Infor />
    </>
  );
}

export default App;
