import useClickOutside from "@/hooks/useClickOutside";
import { Add } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// types
type ModalHeaderProps = {
  children?: React.ReactNode;
  onClose?: () => void;
  containerClass?: string;
  iconClass?: string;
  titleClass?: string;
};

type ModalBodyProps = {
  children: React.ReactNode;
  containerClass?: string;
};

type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
  containerClasses?: string;
  onClose: () => void;
};

const ModalHeader = ({
  children,
  onClose,
  containerClass,
  iconClass: IconClass,
  titleClass,
}: ModalHeaderProps) => {
  return (
    <div
      className={`flex w-full items-center justify-between bg-white  ${containerClass}`}
    >
      <div></div>
      {children && <h1 className={titleClass}>{children}</h1>}
      <button onClick={onClose}>
        <Add className={`h-8 w-8 rotate-45 cursor-pointer ${IconClass}`} />
      </button>
    </div>
  );
};

const ModalBody = ({ children, containerClass }: ModalBodyProps) => {
  return <div className={`${containerClass}`}>{children}</div>;
};

const Modal = ({ children, containerClasses, open, onClose }: ModalProps) => {
  // state
  const [isClient, setIsClient] = useState(false);

  //   hooks
  useEffect(() => {
    setIsClient(true);
  }, []);

  // To close the modal when it is clicked outside the modal
  const ref = useClickOutside(onClose);

  // deactive scroll when modal is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "visible";
  }, [open]);

  if (typeof window === "object" && isClient) {
    return (
      open &&
      createPortal(
        <div
          className={`smooth-transition fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ${containerClasses}  ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {
            <div ref={ref} className="relative overflow-hidden rounded-8">
              {children}
            </div>
          }
        </div>,
        document.body
      )
    );
  }
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
