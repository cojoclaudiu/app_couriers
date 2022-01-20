import DropdownIcon from '../Icons/DropdownIcon';
import styles from './index.module.css';

function AllCouriers() {
  return (
    <div className={styles.allCouriers}>
      <div>All Couriers</div>
      <div className={styles.icon}>
        <DropdownIcon />
      </div>
    </div>
  );
}

export default AllCouriers;
