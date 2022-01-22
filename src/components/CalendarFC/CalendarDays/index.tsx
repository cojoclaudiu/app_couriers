import { useContext } from 'react';
import { CalendarContext } from '../context/calendarContext';
import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarDays() {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);
  const { getMonthWeekDays } = useCalendar(currentDate, setCurrentDate);

  const calendar = getMonthWeekDays({ forceSixWeeks: true });

  return (
    <div className={styles.daysContainer}>
      {calendar.map((day) => (
        <div className={styles.dateCell} key={`${day}/${day.getDate() + 1}`}>
          {day.getDate()}
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
