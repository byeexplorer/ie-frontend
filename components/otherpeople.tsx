import React from 'react';
import GuestCard from './common/guest-card';

type Props = {};

// @FIXME
const Otherpeople = (props: Props) => {
  return (
    <section>
      <h1>You can see other people!</h1>
      <GuestCard type="blue" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
      <GuestCard type="gray" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
      <GuestCard type="purple" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" isView />
    </section>
  );
};

export default Otherpeople;
