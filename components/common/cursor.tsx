import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -40, y: -40 });

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
