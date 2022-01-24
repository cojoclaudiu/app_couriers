import Dropdown from '../Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import styles from './index.module.css';

function AllCouriers() {
  return (
    <div className={styles.allCouriers}>
      <Dropdown name="All couriers">
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default AllCouriers;
