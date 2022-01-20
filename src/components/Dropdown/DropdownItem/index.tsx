import { ReactNode } from 'react';
import styles from './index.module.css';

interface IDropdownItem {
  children: ReactNode;
}

function DropdownItem({ children }: IDropdownItem) {
  return <div className={styles.dropdownItem}>{children}</div>;
}

export default DropdownItem;
