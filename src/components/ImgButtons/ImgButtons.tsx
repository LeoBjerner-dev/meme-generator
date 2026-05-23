import "./ImgButtons.component.css";

interface Iprops {
  updateImg: (url: string) => void;
  showSuggestions: () => void;
  clickedStart: boolean
}

const ImgButtons = (props: Iprops) => {
  return ( props.clickedStart ?
    <div>
      <img
        src="catMeme.png"
        alt="catmeme"
        onClick={() => props.updateImg("catMeme.png")}
      />
      <img
        src="drakeMeme.png"
        alt="drakememe"
        onClick={() => props.updateImg("drakeMeme.png")}
      />
      <img
        src="confusedMeme.png"
        alt="confusedmeme"
        onClick={() => props.updateImg("confusedMeme.png")}
      />
    </div>
     
  : <div>
    <button className="selectMemeBtn" onClick={props.showSuggestions}>Välj meme</button>
    </div>);
};

export default ImgButtons;
