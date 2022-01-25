import styles from './index.module.css';
interface ITimestamp {
  dateTime: string;
  primaryColor?: 'success' | 'notice' | 'warning' | 'default' | 'currentColor';
  secondaryColor?:
    | 'successLight'
    | 'noticeLight'
    | 'warningLight'
    | 'defaultLight'
    | 'currentColor';
}

function Timestamp({
  dateTime,
  primaryColor = 'currentColor',
  secondaryColor = 'currentColor',
}: ITimestamp) {
  const [timestampDate, timestampHour] = dateTime.split('/');

  return (
    <div className={styles.timeContainer}>
      <div className={primaryColor}>{timestampDate}</div>
      <div className={`${styles.hour} ${secondaryColor}`}>{timestampHour}</div>
    </div>
  );
}

export default Timestamp;
