import { createContext, useCallback, useContext, useState } from 'react';
import { getComments } from './api';

export const useComment = () => {
  const [comments, setComments] = useState<CommentRes[]>([]);

  const fetchComments = useCallback(async () => {
    const res = await getComments();

    if (res) {
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
