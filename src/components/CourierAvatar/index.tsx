import styles from './index.module.css';

interface ICourierAvatar {
  type: string;
}

function CourierAvatar({ type }: ICourierAvatar) {
  const avatar = (courierName: string) => {
    switch (courierName) {
      case 'cargus':
        return '/assets/couriers/cargus.png';
      case 'fanc':
        return '/assets/couriers/fancourier.png';
      case 'dpd':
        return '/assets/couriers/dpd.png';
      case 'gls':
        return '/assets/couriers/gls.png';
      case 'sameday':
        return '/assets/couriers/sameday.png';
      default:
        return 'n/a';
    }
  };

  return (
    <div className={styles.avatarContainer}>
      <img className={styles.avatarImage} src={avatar(type)} alt="logo" />
    </div>
  );
}

export default CourierAvatar;
