import Dropdown from '../Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import styles from './index.module.css';

function NavigationFilters() {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterContainer}>
        <div>Seller:</div>
        <Dropdown name="All">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
        </Dropdown>
      </div>

      <div className={styles.filterContainer}>
        <div>Status:</div>
        <div>All</div>
      </div>

      <div className={styles.filterContainer}>
        <div>Cash on Deliver:</div>
        <div>All</div>
      </div>

      <div className={styles.filterDate}>
        <div>Date:</div>
        <div>All</div>
      </div>
    </div>
  );
}

export default NavigationFilters;
