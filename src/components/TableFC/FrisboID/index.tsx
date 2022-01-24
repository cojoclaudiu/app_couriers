import DropdownIcon from '../../Icons/DropdownIcon';
import styles from './index.module.css';

function FrisboID() {
  return (
    <div className={styles.frisboIDContainer}>
      <span>Frisbo #</span>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.buttonArrow} ${styles.arrowUp}`}>
          <DropdownIcon />
        </button>

        <button className={`${styles.buttonArrow} ${styles.arrowDown}`}>
          <DropdownIcon />
        </button>
      </div>
    </div>
  );
}

export default FrisboID;
