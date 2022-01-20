import styles from './index.module.css';

function NumberOfOrders() {
  return (
    <div className={styles.numberContainer}>
      <div className={styles.number}>16</div>
      <div className={styles.numberLabel}>orders displayed</div>
    </div>
  );
}

export default NumberOfOrders;
