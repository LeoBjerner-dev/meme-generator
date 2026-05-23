import { useState } from "react";

import "./App.css";
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import ImgButtons from "./components/ImgButtons/ImgButtons";

function App() {
  const [chosenImage, setChosenImage] = useState<string | null>(null);
  const [clickedStart, setClickedStart] = useState(false);

  const updateImg = (url: string) => {
    setChosenImage(url);
    setClickedStart(false)
  };

  const showSuggestions = () => {
    setClickedStart(true);
  };

  return (
    <>
      {chosenImage && <MemeDisplay id={1} img={chosenImage} alt="" />}
      <ImgButtons
        updateImg={updateImg}
        showSuggestions={showSuggestions}
        clickedStart={clickedStart}
      />
    </>
  );
}

export default App;