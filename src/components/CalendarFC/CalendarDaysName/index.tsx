import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

function CalendarDaysName() {
  const { listWeekDaysName } = useCalendar();
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
