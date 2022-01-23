import { Fragment } from 'react';
import data from '../../data/data.json';
import AWB from '../AWB';
import CourierAvatar from '../CourierAvatar';
import ChevronIcon from '../Icons/ChevronIcon';
import StatusLabel from '../StatusLabel';
import Timestamp from '../Timestamp';
import Cell from './Cell';
import useRowDelimiter from './hooks/useRowDelimiter';
import styles from './index.module.css';

function TableFC() {
  const selectedItemsTable = [15, 13, 11, 3];
  const lastItemStatus = (index: number) =>
    ((index === 14 || index === 12 || index === 0 || index === 2) && 'successLight') ||
    ((index === 13 || index === 3) && 'successDark') ||
    (index === 15 && 'warningDarkOutline') ||
    (index === 11 && 'noticeDark') ||
    'warningLight';

  const { selectedItems } = useRowDelimiter(styles.delimiter);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.idContainer}>Frisbo</div>
        <div>Courier</div>
        <div>COD</div>
        <div>AWB</div>
        <div>Return AWB</div>
        <div>Seller</div>
        <div>Last Status</div>
        <div>Timestamp</div>
      </div>

      {data.map((item, index) => {
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
                element={
                  <StatusLabel label={item.lastStatus} type={lastItemStatus(index)} />
                }
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
      })}
    </div>
  );
}

export default TableFC;
