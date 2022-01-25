import data from '../../data/data.json';
import CellAscendingDescending from './CellAscendingDescending';
import styles from './index.module.css';
import Row from './Row';

function TableFC() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <CellAscendingDescending name="Frisbo #" />
        <div>Courier</div>
        <div>COD</div>
        <div>AWB</div>
        <div>Return AWB</div>
        <div>Seller</div>
        <div>Last Status</div>
        <CellAscendingDescending name="Timestamp" />
      </div>

      {data.map((item, index) => {
        return <Row key={item.id} item={item} index={index} />;
      })}
    </div>
  );
}

export default TableFC;
