import { ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children?: ReactElement;
}

const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? ReactDOM.createPortal(children, document.getElementById('cursor-portal') as HTMLDivElement) : null;
};

export default Portal;
