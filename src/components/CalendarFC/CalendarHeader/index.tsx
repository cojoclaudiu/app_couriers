import { useContext } from 'react';
import DropdownIcon from '../../Icons/DropdownIcon';
import { CalendarContext } from '../context/calendarContext';
import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarHeader() {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const { headerDate, nextMonth, prevMonth } = useCalendar(currentDate, setCurrentDate);
  return (
    <div className={styles.calendarHeader}>
      <button
        onClick={prevMonth}
        className={`${styles.buttonMonth} ${styles.buttonLeft}`}
      >
        <DropdownIcon />
      </button>
      <div>{headerDate}</div>
      <button
        onClick={nextMonth}
        className={`${styles.buttonMonth} ${styles.buttonRight}`}
      >
        <DropdownIcon />
      </button>
    </div>
  );
}

export default CalendarHeader;
