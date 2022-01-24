import DropdownIcon from '../../Icons/DropdownIcon';
import styles from './index.module.css';

interface ICalendarMonth {
  date: Date;
  localeUtils?: Object;
}

function CalendarMonth({ date }: ICalendarMonth) {
  return (
    <div className={styles.monthNameContainer}>
      <button className={styles.previousMonth} onClick={() => {}}>
        <DropdownIcon />
      </button>

      <div className={styles.monthName}>
        {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </div>

      <button className={styles.nextMonth} onClick={() => {}}>
        <DropdownIcon />
      </button>
    </div>
  );
}

export default CalendarMonth;
