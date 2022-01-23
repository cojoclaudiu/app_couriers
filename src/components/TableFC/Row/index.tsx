import { Fragment } from 'react';
import useRowDelimiter from '../hooks/useRowDelimiter';
import Cell from '../Cell';
import CourierAvatar from '../../CourierAvatar';
import StatusLabel from '../../StatusLabel';
import AWB from '../../AWB';
import Timestamp from '../../Timestamp';
import ChevronIcon from '../../Icons/ChevronIcon';
import styles from './index.module.css';

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
  const selectedItemsTable = [15, 13, 11, 3];
  const lastItemStatus = (index: number) =>
    ((index === 14 || index === 12 || index === 0 || index === 2) && 'successLight') ||
    ((index === 13 || index === 3) && 'successDark') ||
    (index === 15 && 'warningDarkOutline') ||
    (index === 11 && 'noticeDark') ||
    'warningLight';

  const { selectedItems } = useRowDelimiter(styles.delimiter);

  return (
    <Fragment key={item.id}>
      <div
        className={`${styles.tableRow}   ${
          (index === 15 ? styles.rowRed : '') ||
          (index === 13 || index === 3 ? styles.rowGreen : '') ||
          (index === 11 ? styles.rowBlue : '')
        }`}
      >
        <Cell element={<div className={styles.idContainer}>{item.id}</div>} />
        <Cell element={<CourierAvatar type={item.courier} />} />
        <Cell
          element={
            item.cod && (
              <StatusLabel
                label="COD"
                type={
                  (index === 15 && 'warningDark') ||
                  (index === 13 && 'successDark') ||
                  (index === 11 && 'noticeOutline') ||
                  (index === 10 && 'warningOutline') ||
                  (index === 3 && 'successOutline') ||
                  'defaultOutline'
                }
              />
            )
          }
        />
        <Cell element={<AWB number={item.awb} timestamp={item.date} />} />
        <Cell
          element={
            item.returnAWB ? (
              <AWB number={item.returnAWB} timestamp={item.returnDate} />
            ) : (
              <hr className={styles.noItemInCell} />
            )
          }
        />
        <Cell element={item.seller} />
        <Cell
          element={<StatusLabel label={item.lastStatus} type={lastItemStatus(index)} />}
        />
        <Cell element={<Timestamp dateTime={item.timestamp} />} />
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
