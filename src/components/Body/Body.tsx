import { ReactNode } from 'react';
import styles from './index.module.css';

interface BodyProps {
  children: ReactNode;
}

function Body({ children }: BodyProps) {
  return <main className={styles.bodyWrapper}>{children}</main>;
}

export default Body;
