import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
  description: string;
};

const Modal = ({ isOpen, onChange, children, title, description }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/80 backdrop-blur-sm fixed inset-0 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />

        <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] rounded-md bg-neutral-800 p-[25px] focus:outline-none data-[state=open]:animate-zoomIn data-[state=closed]:animate-zoomOut">
          <Dialog.Title className="text-xl text-center font-bold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm text-center leading-normal">
            {description}
          </Dialog.Description>

          <div>{children}</div>

          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-neutral-200 absolute top-[10px] right-[10px] inline-flex size-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
