import styles from "./MemeDisplay.module.css"
import type { Imemes } from '../../../interfaces';


const MemeDisplay = (props: Imemes) => {

  return (
    <div className={styles.MemeContainer}>
        <div className={styles.ImageContainer}>
            <img src={props.img} alt={props.alt} />
        </div>
        <button>Välj bild</button>
    </div>
  )
}

export default MemeDisplay