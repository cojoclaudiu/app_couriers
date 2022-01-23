import styles from './index.module.css';

enum ELabels {
  warningDark = 'warningDark',
  warningLight = 'warningLight',
  warningOutline = 'warningOutline',
  warningDarkOutline = 'warningDarkOutline',
  successDark = 'successDark',
  successLight = 'successLight',
  successOutline = 'successOutline',
  noticeDark = 'noticeDark',
  noticeLight = 'noticeLight',
  noticeOutline = 'noticeOutline',
  default = 'default',
  defaultOutline = 'defaultOutline',
}

interface IStatusLabel {
  label: string;
  type: keyof typeof ELabels;
}

const labelStyle = (type: keyof typeof ELabels) => {
  switch (type) {
    case ELabels.warningDark:
      return styles.bgDarkWarning;
    case ELabels.warningLight:
      return styles.bgLightWarning;
    case ELabels.warningOutline:
      return `${styles.outline} ${styles.warning}`;
    case ELabels.warningDarkOutline:
      return `${styles.outline} ${styles.warningDark}`;

    case ELabels.successDark:
      return styles.bgDarkSuccess;
    case ELabels.successLight:
      return styles.bgLightSuccess;
    case ELabels.successOutline:
      return `${styles.outline} ${styles.success}`;

    case ELabels.noticeDark:
      return styles.bgDarkNotice;
    case ELabels.noticeLight:
      return styles.bgLightNotice;
    case ELabels.noticeOutline:
      return `${styles.outline} ${styles.notice}`;

    case ELabels.default:
      return styles.bgDefault;
    case ELabels.defaultOutline:
      return `${styles.outline} ${styles.default}`;

    default:
      throw Error('No style found for the StatusLabel component');
  }
};

function StatusLabel({ label, type }: IStatusLabel) {
  return <div className={`${styles.labelContainer} ${labelStyle(type)}`}>{label}</div>;
}

export default StatusLabel;
