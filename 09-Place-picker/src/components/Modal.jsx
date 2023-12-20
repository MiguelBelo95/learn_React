import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children , onClose}) {
  const dialog = useRef();

  useEffect(() => {
    const dialogElement = dialog.current;

    if (open && !dialogElement.hasAttribute('open')) {
      dialogElement.showModal();
    } else if (!open && dialogElement.hasAttribute('open')) {
      dialogElement.close();
    }
  }, [open]);


  return createPortal(
    <dialog className="modal" ref={dialog} open={open} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
