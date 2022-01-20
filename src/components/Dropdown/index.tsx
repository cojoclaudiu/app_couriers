import { ReactNode, useRef, useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownItem from './DropdownItem';
import DropdownWrapper from './DropdownWrapper';

import styles from './index.module.css';

interface IDropdown {
  children: ReactNode;
  name: string;
}

function Dropdown({ children, name }: IDropdown) {
  const [toggle, setToggle] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.menu}>
      <DropdownButton
        ref={buttonRef}
        name={name}
        setToggle={setToggle}
        arrowState={toggle}
      />

      {toggle && (
        <DropdownWrapper setToggle={setToggle} buttonRef={buttonRef}>
          <DropdownItem>All</DropdownItem>
          {children}
        </DropdownWrapper>
      )}
    </div>
  );
}

export default Dropdown;
