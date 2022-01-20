import data from '../../data/data.json';
import AWB from '../AWB';
import COD from '../COD';
import CourierAvatar from '../CourierAvatar';
import Timestamp from '../Timestamp';
import Cell from './Cell';
import styles from './index.module.css';

function TableFC() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div>Frisbo</div>
        <div>Courier</div>
        <div>COD</div>
        <div>AWB</div>
        <div>Return AWB</div>
        <div>Seller</div>
        <div>Last Status</div>
        <div>Timestamp</div>
      </div>

      {data.map((item) => {
        return (
          <div key={item.id} className={styles.tableRow}>
            <Cell element={item.id} />
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
            <Cell element={item.lastStatus} />
            <Cell element={<Timestamp dateTime={item.timestamp} />} />
          </div>
        );
      })}
    </div>
  );
}

export default TableFC;
