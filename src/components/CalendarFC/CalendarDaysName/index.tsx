import { useContext } from 'react';
import { CalendarContext } from '../context/calendarContext';
import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarDaysName() {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const { listWeekDaysName } = useCalendar(currentDate, setCurrentDate);

  return (
    <div className={styles.weekdaysName}>
      {listWeekDaysName.map((day) => (
        <div className={styles.dayCell} key={day}>
          {day.slice(0, -1)}
        </div>
      ))}
    </div>
  );
}

export default CalendarDaysName;
