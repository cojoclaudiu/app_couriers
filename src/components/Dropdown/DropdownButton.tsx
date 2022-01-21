import { forwardRef, Dispatch, SetStateAction, ReactNode } from 'react';
import DropdownIcon from '../Icons/DropdownIcon';
import styles from './index.module.css';

interface IDropdownButton {
  name: string | ReactNode;
  setToggle: Dispatch<SetStateAction<boolean>>;
  arrowState: boolean;
}

const DropdownButton = forwardRef<HTMLButtonElement, IDropdownButton>(function DropButton(
  { name, setToggle, arrowState },
  ref,
) {
  return (
    <button
      ref={ref}
      className={styles.dropdownButton}
      onClick={() => setToggle((prev) => !prev)}
    >
      <span className={styles.buttonName}>{name}</span>

      <span
        className={`${styles.dropdownIcon} ${!arrowState || styles.dropdownIconOpen}`}
      >
        <DropdownIcon />
      </span>
    </button>
  );
});

export default DropdownButton;
