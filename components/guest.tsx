import React from 'react';
import GuestCard from './common/guest-card';

type Props = {};

const Guest = (props: Props) => {
  return (
    <article>
      {/* <h1>Guest Explorer</h1>
      <h4>Leave a Comment</h4> */}
      <div className="flex gap-2">
        <GuestCard type="blue" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
        <GuestCard type="green" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
        <GuestCard type="purple" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
      </div>
    </article>
  );
};

export default Guest;
