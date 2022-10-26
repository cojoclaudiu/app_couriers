import Dropdown from '../Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import styles from './index.module.css';

function NavigationFilters() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: 'numeric',
  };

  const day = new Date().toLocaleDateString('en-us', options);

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>Seller:</div>
        <Dropdown name="All">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
        </Dropdown>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>Status:</div>
        <Dropdown name="All">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
        </Dropdown>
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>COD Status:</div>
        <Dropdown name="All">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
        </Dropdown>
      </div>

      <div className={styles.filterDate}>
        <div>Date: </div>
        {day}
      </div>
    </div>
  );
}

export default NavigationFilters;
