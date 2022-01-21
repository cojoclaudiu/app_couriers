import { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  lastDayOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { ro } from 'date-fns/locale';

function useCalendar() {
  // current day
  const [currentDate, setCurrentDate] = useState(new Date());

  //user selected day
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // current format of the calendar header with locale
  // we can add custom locale from different locations
  const dateFormatHeader = 'MMMM dd';
  const headerDate = format(currentDate, dateFormatHeader, { locale: ro });

  // day name format
  const dayNameFormat = 'EE';

  // first day of week Mon
  const startDayName = startOfWeek(currentDate, { weekStartsOn: 1 });

  //name of days of the week (eg. Mon, Tue)
  const listWeekDaysName = Array.from(Array(7)).map((_, i) =>
    format(addDays(startDayName, i), dayNameFormat, { locale: ro }),
  );

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  function getMonthWeekDays({ forceSixWeeks = false } = {}) {
    const monthFirstDate = startOfMonth(currentDate);
    const monthLastDate = endOfMonth(currentDate);

    return eachDayOfInterval({
      start: forceSixWeeks
        ? startOfWeek(monthFirstDate, { weekStartsOn: 1 })
        : monthFirstDate,
      end: forceSixWeeks
        ? lastDayOfWeek(monthLastDate, { weekStartsOn: 1 })
        : monthLastDate,
    });
  }

  return {
    headerDate,
    nextMonth,
    prevMonth,
    startDayName,
    listWeekDaysName,
    getMonthWeekDays,
  };
}

export default useCalendar;
