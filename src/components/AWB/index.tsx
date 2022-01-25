import styles from './index.module.css';

interface IAWB {
  number: string;
  timestamp: string | null;
  primaryColor?: 'success' | 'notice' | 'warning' | 'default' | 'currentColor';
  secondaryColor?:
    | 'successLight'
    | 'noticeLight'
    | 'warningLight'
    | 'defaultLight'
    | 'currentColor';
}

function AWB({
  number,
  timestamp,
  primaryColor = 'currentColor',
  secondaryColor = 'currentColor',
}: IAWB) {
  return (
    <div className={styles.awbCell}>
      <div className={`${styles.awbNumber} ${primaryColor}`}>{number}</div>
      <div className={`${styles.awbTimestamp} ${secondaryColor}`}>{timestamp}</div>
    </div>
  );
}

export default AWB;
