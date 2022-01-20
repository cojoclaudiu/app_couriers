import styles from './index.module.css';

interface IAWB {
  number: string;
  timestamp: string;
}

function AWB({ number, timestamp }: IAWB) {
  return (
    <div className={styles.awbCell}>
      <div className={styles.awbContainer}>{number}</div>
      <div className={styles.awbTimestamp}>{timestamp}</div>
    </div>
  );
}

export default AWB;
