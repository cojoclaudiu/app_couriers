import SearchIcon from '../Icons/SearchIcon';
import styles from './index.module.css';

function NavigationSearch() {
  return (
    <label className={styles.searchContainer}>
      <span className={styles.iconContainer}>
        <SearchIcon />
      </span>
      <input className={styles.inputSearch} type="search" placeholder="Search" />
    </label>
  );
}

export default NavigationSearch;
