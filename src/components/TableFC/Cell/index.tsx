import { ReactNode } from 'react';
import styles from './index.module.css';

interface ICell {
  element: ReactNode;
  primaryColor?:
    | 'success'
    | 'notice'
    | 'warning'
    | 'default'
    | 'currentColor'
    | 'successLight'
    | 'noticeLight'
    | 'warningLight'
    | 'defaultLight'
    | 'currentColor';
}

function Cell({ element, primaryColor = 'currentColor' }: ICell) {
  return <div className={`${styles.cellContainer} ${primaryColor}`}>{element}</div>;
}

export default Cell;
