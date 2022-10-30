import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { getComments } from './api';

export const useComment = () => {
  const [comments, setComments] = useState<CommentRes[]>([]);

  const fetchComments = useCallback(async () => {
    let res = await getComments();

    if (res) {
      if (res.length % 2 !== 0 && res.length > 5) {
        res.shift();
      }
      setComments(res);
    }
  }, []);

  return { comments, fetchComments };
};

export const CommentContext = createContext<ReturnType<typeof useComment> | null>(null);

export const useCommentStore = () => {
  const store = useContext(CommentContext);
  if (!store) {
    throw new Error(`Component must be wrapped with CommentContext.Provider>`);
  }

  return store;
};

const MAX_WIDTH = 1024;

export default function useResizeObserver<T extends HTMLElement>() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const ref = useRef<null | T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ob = new ResizeObserver(([entry]: ResizeObserverEntry[]) => {
      let width = entry.contentRect.width;

      setIsMobileScreen(width < MAX_WIDTH);
    });
    ob.observe(ref.current);

    return () => {
      ob.disconnect();
    };
  }, []);

  return { ref, isMobileScreen };
}
