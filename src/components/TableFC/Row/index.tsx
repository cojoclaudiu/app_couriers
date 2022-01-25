import { Fragment } from 'react';
import useRowDelimiter from '../hooks/useRowDelimiter';
import Cell from '../Cell';
import CourierAvatar from '../../CourierAvatar';
import StatusLabel from '../../StatusLabel';
import AWB from '../../AWB';
import Timestamp from '../../Timestamp';
import ChevronIcon from '../../Icons/ChevronIcon';
import styles from './index.module.css';
import {
  lastItemStatus,
  primaryColor,
  secondaryColor,
  selectedItemsTable,
  statusLabel,
  tableRowColor,
} from './rowsLogic';

interface IRow {
  index: number;

  item: {
    id: number;
    cod: boolean;
    courier: string;
    awb: string;
    date: string;
    returnAWB: string | null;
    returnDate: string | null;
    seller: string;
    lastStatus: string;
    timestamp: string;
  };
}

function Row({ item, index }: IRow) {
  const { selectedItems } = useRowDelimiter(styles.delimiter);

  return (
    <Fragment key={item.id}>
      <div className={tableRowColor(index, styles)}>
        <Cell
          primaryColor={primaryColor(index)}
          element={<div className={`${styles.idContainer} `}>{item.id}</div>}
        />
        <Cell element={<CourierAvatar type={item.courier} />} />
        <Cell
          element={item.cod && <StatusLabel label="COD" type={statusLabel(index)} />}
        />

        <Cell
          primaryColor={primaryColor(index)}
          element={
            <AWB
              secondaryColor={secondaryColor(index)}
              number={item.awb}
              timestamp={item.date}
            />
          }
        />
        <Cell
          primaryColor={item.returnAWB ? primaryColor(index) : secondaryColor(index)}
          element={
            item.returnAWB ? (
              <AWB
                secondaryColor={secondaryColor(index)}
                number={item.returnAWB}
                timestamp={item.returnDate}
              />
            ) : (
              <hr className={styles.noItemInCell} />
            )
          }
        />
        <Cell primaryColor={primaryColor(index)} element={item.seller} />
        <Cell
          element={<StatusLabel label={item.lastStatus} type={lastItemStatus(index)} />}
        />
        <Cell
          primaryColor={primaryColor(index)}
          element={
            <Timestamp secondaryColor={secondaryColor(index)} dateTime={item.timestamp} />
          }
        />
        <Cell
          element={
            <div className={styles.chevronIcon}>
              <ChevronIcon />
            </div>
          }
        />
      </div>
      {selectedItems(selectedItemsTable, index)}
    </Fragment>
  );
}

export default Row;
