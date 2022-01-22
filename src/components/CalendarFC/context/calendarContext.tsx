import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

interface ICalendarProvider {
  children: ReactNode;
}

interface ICalendarContext {
  data: Array<{}>;
  setData: Dispatch<SetStateAction<{}[]>>;
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

export const CalendarContext = createContext<ICalendarContext>({
  data: [{}],
  setData: () => {},
  currentDate: new Date(),
  setCurrentDate: () => {},
});

function CalendarContextProvider({ children }: ICalendarProvider) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [data, setData] = useState<Array<{}>>([]);

  const value = { data, setData, currentDate, setCurrentDate };
  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
}

export default CalendarContextProvider;
