import { useState } from "react";
import "./App.css";
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import ImgButtons from "./components/ImgButtons/ImgButtons";
import html2canvas from "html2canvas";

function App() {
  const saveMeme = () => {
    const element = document.querySelector(".meme") as HTMLDivElement;
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const [chosenImage, setChosenImage] = useState<string | null>(null);
  const [clickedStart, setClickedStart] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const updateImg = (url: string) => {
    setChosenImage(url);
    setClickedStart(false);
    setTopText("");
    setBottomText("");
  };

  const showSuggestions = () => {
    setClickedStart(true);
  };

  return (
    <>
      {chosenImage && (
        <MemeDisplay
          img={chosenImage}
          alt=""
          topText={topText}
          bottomText={bottomText}
          onTopChange={setTopText}
          onBottomChange={setBottomText}
        />
      )}
      {chosenImage && (
        <button className="downloadBtn" onClick={saveMeme}>
          Ladda ner
        </button>
      )}
      <ImgButtons
        updateImg={updateImg}
        showSuggestions={showSuggestions}
        clickedStart={clickedStart}
      />
    </>
  );
}

export default App;
