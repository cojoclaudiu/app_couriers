import AllCouriers from '../AllCouriers';
import FrisboLogo from '../Icons/FrisboLogo';
import styles from './index.module.css';

function HeaderFC() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <FrisboLogo />
      </div>
      <AllCouriers />
    </header>
  );
}

export default HeaderFC;
