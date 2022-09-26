import { createContext, useCallback, useContext, useState } from 'react';
import { getComments } from './api';

export const useComment = () => {
  const [comments, setComments] = useState<CommentRes[]>([]);

  const fetchComments = useCallback(async () => {
    let res = await getComments();

    if (res) {
      if (res.length % 2 !== 0 && res.length > 5) {
        //TODO: DB 최신순 정렬 확인
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
