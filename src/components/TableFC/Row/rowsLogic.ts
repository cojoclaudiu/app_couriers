export const selectedItemsTable = [15, 13, 11, 3];

export const lastItemStatus = (index: number) =>
  ((index === 14 || index === 12 || index === 0 || index === 2) && 'successLight') ||
  ((index === 13 || index === 3) && 'successDark') ||
  (index === 15 && 'warningDarkOutline') ||
  (index === 11 && 'noticeDark') ||
  'warningLight';

export const statusLabel = (index: number) =>
  (index === 15 && 'warningDark') ||
  (index === 13 && 'successDark') ||
  (index === 11 && 'noticeOutline') ||
  (index === 10 && 'warningOutline') ||
  (index === 3 && 'successOutline') ||
  'defaultOutline';

export const tableRowColor = (index: number, styles: any) =>
  `${styles.tableRow} ${
    (index === 15 ? styles.rowRed : '') ||
    (index === 13 || index === 3 ? styles.rowGreen : '') ||
    (index === 11 ? styles.rowBlue : '')
  }`;

export const primaryColor = (index: number) =>
  (index === 15 && 'warning') ||
  ((index === 13 || index === 3) && 'success') ||
  (index === 11 && 'notice') ||
  'default';

export const secondaryColor = (index: number) =>
  (index === 15 && 'warningLight') ||
  ((index === 13 || index === 3) && 'successLight') ||
  (index === 11 && 'noticeLight') ||
  'defaultLight';
