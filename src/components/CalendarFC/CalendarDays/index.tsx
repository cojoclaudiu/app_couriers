import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarDays() {
  const { getMonthWeekDays } = useCalendar();
  return (
    <div className={styles.daysContainer}>
      {getMonthWeekDays({ forceSixWeeks: true }).map((day) => (
        <div className={styles.dateCell} key={`${day.getDate()}/${day.getMonth() + 1}`}>
          {day.getDate()}
        </div>
      ))}
    </div>
  );
}

export default CalendarDays;
