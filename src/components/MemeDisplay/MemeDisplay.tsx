import styles from "./MemeDisplay.module.css";
import type { Imemes } from "../../../interfaces";

const MemeDisplay = (props: Imemes) => {
  return (
    <div className={styles.MemeContainer}>
      <div className={styles.ImageContainer}>
        <img src={props.img} alt={props.alt} />
        <br />
        <div className={styles.textControls}>
          <div className={styles.textBox}>
            <input type="range" />
            <input type="text" placeholder="Memetext 1"/>
          </div>
          <div className={styles.textBox}>
            <input type="range" />
            <input type="text" placeholder="Memetext 2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeDisplay;
