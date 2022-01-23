import Dropdown from '../Dropdown';
import CalendarMonth from './CalendarMonth';
import CalendarContextProvider from './context/calendarContext';
import format from 'date-fns/format';

function CalendarFC() {
  const dateFormat = format(new Date(), 'MM/dd/yyyy');

  return (
    <CalendarContextProvider>
      <Dropdown name={dateFormat}>
        <CalendarMonth months={2} />
      </Dropdown>
    </CalendarContextProvider>
  );
}

export default CalendarFC;
