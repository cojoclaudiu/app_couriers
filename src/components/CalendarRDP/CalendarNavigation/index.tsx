interface ICalendarNavigation {
  nextMonth: any;
  previousMonth: any;
  onPreviousClick: any;
  onNextClick: any;
  localeUtils: any;
}

function CalendarNavigation({
  nextMonth,
  previousMonth,
  onPreviousClick,
  onNextClick,
  localeUtils,
}: ICalendarNavigation) {
  const months = localeUtils.getMonths();
  const prev = months[previousMonth.getMonth()];
  const next = months[nextMonth.getMonth()];

  return (
    <div>
      <button onClick={() => onPreviousClick()}>← {prev.slice(0, 3)}</button>
      <button onClick={() => onNextClick()}>{next.slice(0, 3)} →</button>
    </div>
  );
}

export default CalendarNavigation;
