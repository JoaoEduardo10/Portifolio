import React from 'react';
import { IoMdClose, IoIosMenu } from 'react-icons/io';

export type ButtonMenuProps = {
  handleShow: (show: boolean) => void;
  show: boolean;
};

export const ButtonMenu = ({ handleShow, show }: ButtonMenuProps) => {
  const handleClickButton = () => {
    handleShow(!show);
  };

  return (
    <div
      onClick={handleClickButton}
      role="button"
      aria-label="button mobile"
      className={
        show
          ? 'button-menu-container-close button-menu-mobile'
          : 'button-menu-container-open button-menu-mobile'
      }
    >
      {show ? (
        <div className="close">
          <IoMdClose aria-label="button close" />
        </div>
      ) : (
        <div className="open">
          <IoIosMenu aria-label="button open" />
        </div>
      )}
    </div>
  );
};
