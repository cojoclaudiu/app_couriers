import { MouseEvent } from 'react';
import styles from './index.module.css';

enum EButton {
  successLight = 'successLight',
  plain = 'plain',
}

interface IPrimaryButton {
  name: string;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  type: keyof typeof EButton;
}

const colorStyle = (type: keyof typeof EButton) => {
  switch (type) {
    case EButton.successLight:
      return styles.successLight;
    default:
      return styles.plain;
  }
};

function PrimaryButton({ name, onClick, type }: IPrimaryButton) {
  return (
    <button className={`${styles.primaryButton} ${colorStyle(type)}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default PrimaryButton;
