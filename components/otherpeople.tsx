import React, { useState } from 'react';

type Props = {};

const Otherpeople = ({}: Props) => {
  //TODO: fetch real comments data
  const [comments, setComments] = useState<CommentRes[]>([]);

  return (
    <section>
      <h1>You can see other people!</h1>
      <p className="text-[15px]">작업중입니다.</p>
      {/* <GuestCard type="blue" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" />
      <GuestCard type="gray" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" />
      <GuestCard type="purple" userName="황예나" userComment="와 페이지 너무 이뻐요~ 와 페이지 너무 이뻐요~" /> */}
    </section>
  );
};

export default Otherpeople;
