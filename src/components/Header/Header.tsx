import AllCouriers from '../AllCouriers';
import ViteLogo from '../../icons/ViteLogo';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <ViteLogo />
      </div>
      <AllCouriers />
    </header>
  );
}

export default Header;
