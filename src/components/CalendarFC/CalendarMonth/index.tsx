import CalendarDays from '../CalendarDays';
import CalendarDaysName from '../CalendarDaysName';
import CalendarHeader from '../CalendarHeader';
import styles from './index.module.css';

interface ICalendarMonths {
  months: number;
}

function CalendarMonth({ months }: ICalendarMonths) {
  const numberOfCalendars = Array.from(Array(months).keys());

  return (
    <div className={styles.calendarsContainer}>
      {numberOfCalendars.map((monthNumber) => {
        return (
          <div className={styles.calendar} key={monthNumber}>
            <CalendarHeader />
            <CalendarDaysName />
            <CalendarDays />
          </div>
        );
      })}
    </div>
  );
}

export default CalendarMonth;
