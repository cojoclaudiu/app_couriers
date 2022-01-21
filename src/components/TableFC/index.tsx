import { Fragment } from 'react';
import data from '../../data/data.json';
import AWB from '../AWB';
import COD from '../COD';
import CourierAvatar from '../CourierAvatar';
import ChevronIcon from '../Icons/ChevronIcon';
import StatusLabel from '../StatusLabel';
import Timestamp from '../Timestamp';
import Cell from './Cell';
import useRowDelimiter from './hooks/useRowDelimiter';
import styles from './index.module.css';

function TableFC() {
  const selectedItemsTable = [15, 13, 11];

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
              <Cell element={item.cod && <COD />} />
              <Cell element={<AWB number={item.awb} timestamp={item.date} />} />
              <Cell
                element={
                  item.returnAWB ? (
                    <AWB number={item.returnAWB} timestamp={item.returnDate} />
                  ) : (
                    <div>----</div>
                  )
                }
              />
              <Cell element={item.seller} />
              <Cell
                element={
                  <StatusLabel
                    label={item.lastStatus}
                    color={
                      ((index === 14 || index === 12 || index === 0 || index === 2) &&
                        'greenLight') ||
                      ((index === 13 || index === 3) && 'greenDark') ||
                      (index === 15 && 'coralOutline') ||
                      (index === 11 && 'blueFull') ||
                      'coralFull'
                    }
                  />
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
