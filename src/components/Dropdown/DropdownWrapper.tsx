import { ReactNode, RefObject, Dispatch, SetStateAction, useRef } from 'react';
import useDropdown from './hooks/useDropdown';
import styles from './index.module.css';

interface IDropdownWrapper {
  children: ReactNode;
  buttonRef: RefObject<HTMLButtonElement>;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function DropdownWrapper({ children, buttonRef, setToggle }: IDropdownWrapper) {
  const dropdownRef = useRef<HTMLElement>(null);

  useDropdown(buttonRef, dropdownRef, setToggle);

  return (
    <aside
      className={`${styles.dropdownContainer} ${styles.customClass}`}
      ref={dropdownRef}
    >
      {children}
    </aside>
  );
}

export default DropdownWrapper;
