import styles from './index.module.css';

function NavigationFilters() {
  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.filterContainer}>
        <div>Seller:</div>
        <div>All</div>
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
