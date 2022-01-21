import { Fragment } from 'react';
import Dropdown from '../Dropdown';
import CalendarDays from './CalendarDays';
import CalendarDaysName from './CalendarDaysName';
import CalendarHeader from './CalendarHeader';
import useCalendar from './hooks/useCalendar';

function CalendarFC() {
  const { headerDate } = useCalendar();
  return (
    <Fragment>
      <Dropdown name={headerDate}>
        <CalendarHeader />
        <CalendarDaysName />
        <CalendarDays />
      </Dropdown>
    </Fragment>
  );
}

export default CalendarFC;
