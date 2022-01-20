import styles from './index.module.css';
interface ITimestamp {
  dateTime: string;
}

function Timestamp({ dateTime }: ITimestamp) {
  const [timestampDate, timestampHour] = dateTime.split('/');

  return (
    <div className={styles.timeContainer}>
      <div>{timestampDate}</div>
      <div className={styles.hour}>{timestampHour}</div>
    </div>
  );
}

export default Timestamp;
