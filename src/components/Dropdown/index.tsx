import { ReactNode, useRef, useState, Fragment } from 'react';
import DropdownButton from './DropdownButton';
import DropdownWrapper from './DropdownWrapper';

interface IDropdown {
  children: ReactNode;
  name?: string | ReactNode;
  buttonName?: string;
  dropdownIcon?: string;
  dropdownIconOpen?: string;
}

function Dropdown({ children, name }: IDropdown) {
  const [toggle, setToggle] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Fragment>
      {name && (
        <DropdownButton
          ref={buttonRef}
          name={name}
          setToggle={setToggle}
          arrowState={toggle}
        />
      )}
      {toggle && (
        <DropdownWrapper setToggle={setToggle} buttonRef={buttonRef}>
          {children}
        </DropdownWrapper>
      )}
    </Fragment>
  );
}

export default Dropdown;
