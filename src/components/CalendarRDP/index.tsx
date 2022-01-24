import { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import PrimaryButton from '../Buttons/PrimaryButton';
import Dropdown from '../Dropdown';
import styles from './calendar.module.css';
import './index.css';

function CalendarRDP() {
  const [calendarDays, setCalendarDays] = useState({
    selectedDay: new Date(),
    from: undefined,
    to: undefined,
  });
  const { from, to } = calendarDays;
  const modifiers = { start: from, end: to };

  const handleRangeClick = (day: any) => {
    const range = DateUtils.addDayToRange(day, calendarDays);
    setCalendarDays((prev: any) => ({ ...prev, ...range }));
  };

  // const handleDayClick = (day: any, { selected }: any) => {
  //   if (selected) {
  //     // Unselect the day if already selected
  //     setCalendarDays((prev: any) => ({ ...prev, selectedDay: undefined }));
  //     return;
  //   }

  //   setCalendarDays((prev) => ({ ...prev, selectedDay: day }));
  // };

  // const handleResetClick = () => {
  //   setCalendarDays((prev) => ({ ...prev, from: undefined, to: undefined }));
  // };

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
        modifiers={modifiers}
        firstDayOfWeek={1}
        className="Selectable"
      />
      <div className={styles.footerCalendar}>
        <PrimaryButton name="Cancel" onClick={() => {}} type="plain" />
        <PrimaryButton name="Set" onClick={() => {}} type="successLight" />
      </div>
    </Dropdown>
  );
}

export default CalendarRDP;
