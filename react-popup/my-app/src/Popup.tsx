import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
  opacity?: string;
};

export function Popup({
  positionTo,
  onClose,
  children,
  opacity = '0.6',
}: Props) {
  const boundingRect = positionTo?.getBoundingClientRect();

  const top = boundingRect ? boundingRect.top + boundingRect.height : '50%';
  const left = boundingRect
    ? boundingRect.left + boundingRect.width / 2
    : '50%';

  return createPortal(
    <>
      <div
        className="click-div"
        style={{
          position: 'fixed',
          top: '0',
          width: '100vw',
          height: '100vh',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}></div>
      <div
        className="pop-up"
        style={{
          position: 'absolute',
          top: typeof top === 'number' ? `${top}px` : top,
          left: typeof left === 'number' ? `${left}px` : left,
          opacity,
        }}>
        {children}
      </div>
    </>,
    document.body
  );
}
