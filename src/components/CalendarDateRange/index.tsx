import { useState, useEffect } from 'react';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import Dropdown from '../Dropdown';

import './theme.css';

function CalendarDateRange() {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (state.length === 0) {
      setState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: 'selection',
        },
      ]);
    }
  }, [state, setState]);

  return (
    <Dropdown name="date">
      <DateRange
        showDateDisplay={false}
        showSelectionPreview={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
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
