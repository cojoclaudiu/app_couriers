import NavigationFilters from '../NavigationFilters';
import NavigationSearch from '../NavigationSearch';
import NumberOfOrders from '../NumberOfOrders';
import styles from './index.module.css';

function NavigationOptions() {
  return (
    <nav className={styles.navWrapper}>
      <NumberOfOrders />
      <NavigationSearch />
      <NavigationFilters />
    </nav>
  );
}

export default NavigationOptions;
