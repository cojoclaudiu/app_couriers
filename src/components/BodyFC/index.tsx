import { ReactNode } from 'react';
import styles from './index.module.css';

interface IBodyFC {
  children: ReactNode;
}

function BodyFC({ children }: IBodyFC) {
  return <main className={styles.bodyWrapper}>{children}</main>;
}

export default BodyFC;
