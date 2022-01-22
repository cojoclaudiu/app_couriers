import Dropdown from '../Dropdown';
import CalendarMonth from './CalendarMonth';
import CalendarContextProvider from './context/calendarContext';

function CalendarFC() {
  return (
    <CalendarContextProvider>
      <Dropdown name={'date'}>
        <CalendarMonth months={2} />
      </Dropdown>
    </CalendarContextProvider>
  );
}

export default CalendarFC;
