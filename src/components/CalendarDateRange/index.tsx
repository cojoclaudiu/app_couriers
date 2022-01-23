import { useState, useEffect } from 'react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Dropdown from '../Dropdown';

import './newTheme.css';

function CalendarDateRange() {
  const [state, setState] = useState([]);
  const dateFormat = format(new Date(), 'MM/dd/yyyy');

  useEffect(() => {
    if (state.length === 0) {
      setState((prev) => [
        ...prev,
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection',
        },
      ]);
    }
  }, [state, setState]);

  return (
    <Dropdown name={dateFormat}>
      <DateRange
        showDateDisplay={false}
        showSelectionPreview={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        // moveRangeOnFirstSelection={true}
        ranges={state}
        months={2}
        direction="horizontal"
        weekStartsOn={1}
        showMonthAndYearPickers={false}
        showMonthArrow={false}
      />
    </Dropdown>
  );
}

export default CalendarDateRange;
