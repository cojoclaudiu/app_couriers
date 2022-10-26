import DropdownIcon from '../../../icons/DropdownIcon';
import styles from './index.module.css';

interface ITableHeaderID {
  name: string;
}

function CellAscendingDescending({ name = 'Default' }: ITableHeaderID) {
  return (
    <div className={styles.tableHeaderContainer}>
      <span>{name}</span>
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

export default CellAscendingDescending;
