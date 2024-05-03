"use cleint";
import { Trash } from "iconsax-react";
import { HTMLProps, useState } from "react";
import Modal from "./shared/Modal";

export interface DeleteShoppingCartBtnProps
  extends HTMLProps<HTMLButtonElement> {
  title: string;
  className?: string;
  iconClassName?: string;
  deleteFunc: () => void;
}

const DeleteShoppingCartBtn = ({
  title,
  className,
  iconClassName,
  deleteFunc,
}: DeleteShoppingCartBtnProps) => {
  // modal state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setIsOpen(false);
    deleteFunc();
  };

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header
          onClose={() => setIsOpen(false)}
          containerClass="px-3 py-3 !bg-muted-400"
          titleClass="h5-bold text-muted-800"
          iconClass="text-muted-800 w-10 h-10"
        >
          {title}
        </Modal.Header>
        <Modal.Body containerClass="max-w-xs md:max-w-lg">
          <div className="body-md bg-muted-100 px-4 py-3">
            آیا مطمئن هستید که میخواهید این آیتم را از سبد خرید خود حذف کنید ؟
            <div className="mt-4 flex items-center gap-x-4">
              <button
                onClick={handleDelete}
                className="button-primary rounded-4 px-6 py-1"
              >
                بله
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-4 px-6 py-1 text-error-200 hover:bg-error-200/10"
              >
                خیر
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className={`hover:text-error-200 ${className}`}
      >
        <Trash className={`h-6 w-6 ${iconClassName}`} />
      </button>
    </>
  );
};

export default DeleteShoppingCartBtn;
