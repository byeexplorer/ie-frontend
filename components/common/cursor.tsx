import { useEffect, useRef, useState } from 'react';

interface Props {
  visible: boolean;
}

const Cursor = ({ visible }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const cursorHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', cursorHandler);
    return () => window.removeEventListener('mousemove', cursorHandler);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: `${visible ? 1 : 0}`,
        transition: 'opacity 0.3s',
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        background: '#fff',
        position: 'fixed',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        left: pos.x,
        top: pos.y,
      }}
    />
  );
};

export default Cursor;
