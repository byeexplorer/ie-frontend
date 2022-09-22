import { getComments, postComments } from 'lib/api';
import { CommentContext, useComment, useCommentStore } from 'lib/hooks';
import React, { useCallback, useEffect, useState } from 'react';
import { GuestCard } from './common';

type Props = {};

const Otherpeople = ({}: Props) => {
  const { comments } = useCommentStore();

  return (
    <section>
      <h1>You can see other people!</h1>
      <p className="text-[15px]">작업중입니다.</p>
      {comments.map((comment, index) => (
        <div key={index}>
          {comment.color}
          {comment.comment}
          {comment.name}
          {comment.createdAt}
        </div>
        // <GuestCard type={comment.obj} userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" />
      ))}
      {/*
      <GuestCard type="gray" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" />
      <GuestCard type="purple" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" /> */}
    </section>
  );
};

export default Otherpeople;
