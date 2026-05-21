interface Iprops {
  updateImg: (url: string) => void;
}

const ImgButtons = (props: Iprops) => {
  return (
    <div>
      <img src="catMeme.png" alt="catmeme" onClick={()=>props.updateImg("catMeme.png")}/>
      <img src="drakeMeme.png" alt="drakememe"  onClick={() =>props.updateImg("drakeMeme.png")}/>
      <img src="confusedMeme.png" alt="confusedmeme" onClick={() =>props.updateImg("confusedMeme.png")}/>
    </div>
  );
};

export default ImgButtons;
