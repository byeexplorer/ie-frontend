import { gsap } from 'gsap';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { CommonButton, GuestCard } from './common';
import styles from 'styles/guestcard.module.scss';
import { postComments } from 'lib/api';
import { useCommentStore } from 'lib/hooks';
import Submit from './submit';

const cardColor: CardColor[] = ['blue', 'green', 'purple', 'gray'];
const cardModel: CardModel[] = ['oldest', 'edge', 'explorer', 'newest'];

const Guest = () => {
  const [color, setColor] = useState<CardColor>('blue');
  const [obj, setObj] = useState<CardModel>('oldest');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);

  const { fetchComments } = useCommentStore();

  const resetSubmit = useCallback(() => {
    setColor('blue');
    setObj('oldest');
    setName('');
    setComment('');
  }, []);

  const createComment = useCallback(async () => {
    const status = await postComments({ color, comment, name, obj });

    if (status && status === 201) {
      setIsSubmit(true);
      fetchComments();
      gsap.to(window, { scrollTo: '#other-people', duration: 1 });
      resetSubmit();
    }
  }, [color, comment, name, obj, resetSubmit, fetchComments]);

  const handleSubmit = () => {
    if (!name || !comment) {
      return;
    }
    createComment();
  };

  const handleColorClick = (value: CardColor) => setColor(value);
  const handleModelClick = (value: CardModel) => setObj(value);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    if (isSubmit) {
      const timer = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmit]);

  return (
    <section id="guest-explorer" className="flex flex-col items-center mt-20">
      <h1 className="text-[50px] leading-[60%] mt-4">Guest Explorer</h1>
      <main className="w-full px-16 mt-6 flex gap-2 text-center">
        <section className="bg-lightdark rounded-md p-2">
          <article className="">
            <h2 className="text-[20px]">Choose a card color</h2>
            <div className="flex gap-[11px] mt-2">
              {cardColor.map((cardColor) => (
                <button
                  aria-label={`card-color-${cardColor}`}
                  className={`w-[85px] h-[85px] rounded-[10px] box-border ${
                    color === cardColor ? 'border-white border' : ''
                  }`}
                  style={{ background: `var(--card-${cardColor})` }}
                  onClick={() => handleColorClick(cardColor)}
                  key={cardColor}
                />
              ))}
            </div>
          </article>

          <article className="mt-5">
            <h2 className="text-[20px]">Choose your character</h2>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {cardModel.map((cardModel) => (
                <button
                  aria-label={`card-model-${cardModel}}`}
                  className={`aspect-[4/5] rounded-[10px] bg-black grid place-items-center box-border ${
                    cardModel === obj ? 'bg-[#252525] border-white border' : ''
                  }`}
                  key={cardModel}
                  onClick={() => handleModelClick(cardModel)}
                >
                  <div className="relative w-[80%] h-[65%]">
                    <Image src={`/images/models/${cardModel}-${color}.png`} alt="model" layout="fill" />
                  </div>
                </button>
              ))}
            </div>
          </article>
        </section>
        <section className="bg-lightdark rounded-md p-2 flex-1 flex flex-col justify-between">
          <article className="flex flex-col items-center">
            <h2 className="text-[20px] mb-2">You can see your card</h2>
            <GuestCard
              {...{ color, obj }}
              small
              name={name.length === 0 ? 'Name' : name}
              comment={comment.length === 0 ? 'Write down your own message to Internet Explorer.' : comment}
            />
          </article>
          <article className="flex flex-col mt-3">
            <h2 className="text-[20px] mb-1">Leave a message</h2>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-black rounded-md text-[16px] p-1 mb-1 placeholder:text-[#646464]"
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
            <div className="relative w-full">
              <textarea
                value={comment}
                cols={5}
                rows={4}
                placeholder="Write down your own message to Internet Explorer."
                className={styles.commentarea}
                onChange={(e) => setComment(e.target.value)}
                maxLength={100}
              />
              <span className="absolute bottom-[20%] right-2 text-[#646464] text-[13px]">{comment.length}/100</span>
            </div>
          </article>
        </section>
      </main>

      <CommonButton isActive={name.length > 0 && comment.length > 0} content="Submit" onClick={handleSubmit} />
      {isSubmit && <Submit />}
    </section>
  );
};

export default Guest;
