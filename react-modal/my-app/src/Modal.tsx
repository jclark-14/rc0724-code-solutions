import { ReactNode, useEffect, useRef } from 'react';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export function Modal({ children, isOpen }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() =>
    isOpen ? modal.current?.showModal() : modal.current?.close()
  );

  return <dialog ref={modal}>{children}</dialog>;
}
