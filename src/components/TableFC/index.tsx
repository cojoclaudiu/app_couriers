import data from '../../data/data.json';
import FrisboID from './FrisboID';
import styles from './index.module.css';
import Row from './Row';

function TableFC() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <FrisboID />
        <div>Courier</div>
        <div>COD</div>
        <div>AWB</div>
        <div>Return AWB</div>
        <div>Seller</div>
        <div>Last Status</div>
        <div>Timestamp</div>
      </div>

      {data.map((item, index) => {
        return <Row key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default TableFC;
