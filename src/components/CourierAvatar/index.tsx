import styles from './index.module.css';

enum Couriers {
  cargus = 'cargus',
  fanc = 'fanc',
  dpd = 'dpd',
  gld = 'gls',
  sameday = 'sameday',
}

interface ICourierAvatar {
  type: keyof typeof Couriers | string;
}

function CourierAvatar({ type }: ICourierAvatar) {
  const avatar = (courierName: string) => {
    switch (courierName) {
      case Couriers.cargus:
        return '/assets/couriers/cargus.png';
      case Couriers.fanc:
        return '/assets/couriers/fancourier.png';
      case Couriers.dpd:
        return '/assets/couriers/dpd.png';
      case Couriers.gld:
        return '/assets/couriers/gls.png';
      case Couriers.sameday:
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
