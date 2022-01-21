import styles from './index.module.css';

interface IStatusLabel {
  label: string;
  color?: 'coralFull' | 'coralOutline' | 'blueFull' | 'greenDark' | 'greenLight';
}

function StatusLabel({ label, color }: IStatusLabel) {
  return (
    <div className={`${styles.labelContainer} ${color ? styles[color] : ''}`}>
      {label}
    </div>
  );
}

export default StatusLabel;
