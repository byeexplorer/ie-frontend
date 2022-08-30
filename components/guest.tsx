import React, { useCallback, useState } from 'react';
import { EmptyCard, GuestCard } from './common';

const Guest = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const onChangeValue = useCallback((type: 'name' | 'comment', value: string) => {
    switch (type) {
      case 'name':
        setName(value);
        break;
      case 'comment':
        setComment(value);
        break;
    }
  }, []);

  // TODO: fetch submit
  const handleSubmit = () => {};

  return (
    <section className="flex flex-col items-center mt-20">
      <h1 className="text-[50px] leading-[60%] mt-4">Guest Explorer</h1>
      <h4 className="text-[26px] mt-1 mb-4">Leave a Comment</h4>
      <div className="flex gap-2 items-end">
        <EmptyCard />
        <GuestCard type="gray" userName={name} userComment={comment} onChange={onChangeValue} />
        <EmptyCard />
      </div>
      <button
        className={`rounded-2xl text-dark text-[26px] font-bold px-8 py-1 mt-6 ${
          name.length > 0 && comment.length > 0 ? 'bg-white' : 'bg-[#6c6c6c]'
        }`}
      >
        Submit
      </button>
    </section>
  );
};

export default Guest;
