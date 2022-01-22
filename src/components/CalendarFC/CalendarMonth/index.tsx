import { addMonths } from 'date-fns';
import { add } from 'lodash';
import { useEffect } from 'react';
import { useContext } from 'react';
import CalendarDays from '../CalendarDays';
import CalendarDaysName from '../CalendarDaysName';
import CalendarHeader from '../CalendarHeader';
import { CalendarContext } from '../context/calendarContext';
import useCalendar from '../hooks/useCalendar';
import styles from './index.module.css';

interface ICalendarMonths {
  months: number;
}

function CalendarMonth({ months }: ICalendarMonths) {
  const { currentDate, setCurrentDate, data, setData } = useContext(CalendarContext);
  const { headerDate, nextMonth } = useCalendar(currentDate, setCurrentDate);

  const numberOfCalendars = Array.from(Array(months).keys());

  useEffect(() => {
    const seedContext = () => {
      numberOfCalendars.map((numCalendar, index) => {
        if (numCalendar <= index)
          setData((prev) => [
            ...prev,
            setCurrentDate(addMonths(currentDate, numCalendar + 1)),
          ]);
      });
    };

    seedContext();
  }, [numberOfCalendars]);

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
