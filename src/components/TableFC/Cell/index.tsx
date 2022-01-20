import { ReactNode } from 'react';
import styles from './index.module.css';

interface ICell {
  element: ReactNode;
}

function Cell({ element }: ICell) {
  return <div className={styles.cellContainer}>{element}</div>;
}

export default Cell;
