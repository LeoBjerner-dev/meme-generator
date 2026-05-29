import styles from "./MemeDisplay.module.css";
import type { Imemes } from "../../../interfaces";

const MemeDisplay = (props: Imemes) => {
  return (
    <div className={styles.MemeContainer}>
      <div className={styles.ImageContainer}>
        <div className={`${styles.meme} meme`}>
          <img src={props.img} alt={props.alt} />
          <span
            className={styles.top}
            style={{ fontSize: `${props.topSize}px` }}
          >
            {props.topText}
          </span>
          <span
            className={styles.bottom}
            style={{ fontSize: `${props.bottomSize}px` }}
          >
            {props.bottomText}
          </span>
        </div>
        <div className={styles.textControls}>
          <div className={styles.textBox}>
            <input
              type="range"
              min={16}
              max={80}
              value={props.topSize}
              onChange={(e) => props.onTopSizeChange(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Memetext 1"
              value={props.topText}
              onChange={(e) => props.onTopChange(e.target.value)}
            />
          </div>
          <div className={styles.textBox}>
            <input
              type="range"
              min={16}
              max={80}
              value={props.bottomSize}
              onChange={(e) => props.onBottomSizeChange(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Memetext 2"
              value={props.bottomText}
              onChange={(e) => props.onBottomChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeDisplay;
