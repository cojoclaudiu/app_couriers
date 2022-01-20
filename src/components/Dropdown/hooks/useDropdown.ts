import { Dispatch, SetStateAction, RefObject } from 'react';
import { useEffect } from 'react';

const useDropdown = (
  buttonRef: RefObject<HTMLButtonElement>,
  dropdownRef: RefObject<HTMLElement>,
  setToggle: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    const handleClickOutsideMenu = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLButtonElement;

      if (
        buttonRef.current &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      // clean-up event listener
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [buttonRef, dropdownRef, setToggle]);
};

export default useDropdown;
