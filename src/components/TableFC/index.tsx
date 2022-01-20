import data from '../../data/data.json';
import CourierAvatar from '../CourierAvatar';
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
            <div>{item.id}</div>

            <CourierAvatar type={item.courier} />
            <div>{item.cod ? 'Cod' : 'empty'}</div>

            <div>
              <div>{item.awb}</div>
              <div>{item.date}</div>
            </div>

            <div>{item.returnAWB || 'no return'}</div>

            <div>{item.seller}</div>

            <div>{item.lastStatus}</div>
            <div>{item.timestamp}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TableFC;
