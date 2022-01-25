import { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import PrimaryButton from '../Buttons/PrimaryButton';
import Dropdown from '../Dropdown';
import styles from './calendar.module.css';
import CalendarMonth from './CalendarMonth';
import './index.css';

function CalendarFC() {
  const [calendarDays, setCalendarDays] = useState({
    selectedDay: new Date(),
    from: undefined,
    to: undefined,
  });
  const { from, to } = calendarDays;
  const modifiers = {
    start: from,
    end: to,
    highlighted: {
      from,
      to,
    },

    range: {
      after: from,
      before: to,
    },
  };

  const handleRangeClick = (day: any) => {
    const range = DateUtils.addDayToRange(day, calendarDays);
    setCalendarDays((prev: any) => ({ ...prev, ...range }));
  };

  return (
    <Dropdown
      calendar={true}
      name={
        calendarDays.selectedDay
          ? calendarDays.selectedDay.toLocaleDateString()
          : new Date()
      }
    >
      <DayPicker
        numberOfMonths={2}
        onDayClick={handleRangeClick}
        selectedDays={[from, { from, to }]}
        modifiers={from && modifiers}
        firstDayOfWeek={1}
        className="Selectable"
        captionElement={({ date }) => <CalendarMonth date={date} />}
        // I will add custom navigation in CalendarNavbar component
        canChangeMonth={false}
      />
      <div className={styles.footerCalendar}>
        <PrimaryButton name="Cancel" onClick={() => {}} type="plain" />
        <PrimaryButton name="Set" onClick={() => {}} type="successLight" />
      </div>
    </Dropdown>
  );
}

export default CalendarFC;
