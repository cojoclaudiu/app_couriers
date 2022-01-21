import DropdownIcon from '../../Icons/DropdownIcon';
import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarHeader() {
  const { headerDate } = useCalendar();
  return (
    <div className={styles.calendarHeader}>
      <button className={`${styles.buttonMonth} ${styles.buttonLeft}`}>
        <DropdownIcon />
      </button>
      <div>{headerDate}</div>
      <button className={`${styles.buttonMonth} ${styles.buttonRight}`}>
        <DropdownIcon />
      </button>
    </div>
  );
}

export default CalendarHeader;
