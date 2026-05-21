import { useState } from "react";

import "./App.css";
import MemeDisplay from "./components/MemeDisplay/MemeDisplay";
import ImgButtons from "./components/ImgButtons/ImgButtons";

function App() {

  const [chosenImage, setChosenImage] = useState("")
  
  const updateImg = (url: string) => {
    setChosenImage(url)
  }
  
  return (
    <>
      <MemeDisplay id={1} img={chosenImage} alt="" />
      <ImgButtons updateImg={updateImg}/>
    </>
  );
}

export default App;
