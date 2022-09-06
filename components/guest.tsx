import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { GuestCard } from './common';

const cardColor: CardColor[] = ['blue', 'green', 'purple', 'gray'];
const cardModel: CardModel[] = ['ie-95', 'ie-edge1', 'ie-97', 'ie-edge2'];

const Guest = () => {
  const [color, setColor] = useState<CardColor>('blue');
  const [model, setModel] = useState<CardModel>('ie-95');

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  // TODO: fetch submit
  const handleSubmit = () => {
    alert('준비중입니다.');
  };

  const handleColorClick = useCallback((value: CardColor) => setColor(value), []);
  const handleModelClick = useCallback((value: CardModel) => setModel(value), []);

  return (
    <section id="guest-explorer" className="flex flex-col items-center mt-20">
      <h1 className="text-[50px] leading-[60%] mt-4">Guest Explorer</h1>
      <main className="w-full px-16 mt-6 flex gap-2 text-center">
        <section className="bg-lightdark rounded-md p-2">
          <article className="">
            <h2 className="text-[20px]">Choose a card color</h2>
            <div className="flex gap-[11px] mt-2">
              {cardColor.map((card) => (
                <button
                  className={`w-[85px] h-[85px] rounded-[10px] box-border ${
                    color === card ? 'border-white border' : ''
                  }`}
                  style={{ background: `var(--card-${card})` }}
                  onClick={() => handleColorClick(card)}
                  key={card}
                />
              ))}
            </div>
          </article>

          <article className="mt-5">
            <h2 className="text-[20px]">Choose your character</h2>
            <div className="grid grid-cols-2 gap-1 mt-2">
              {cardModel.map((card) => (
                <button
                  className={`aspect-[4/5] rounded-[10px] bg-black grid place-items-center box-border ${
                    card === model ? 'bg-[#252525] border-white border' : ''
                  }`}
                  key={card}
                  onClick={() => handleModelClick(card)}
                >
                  <div className="relative w-[80%] h-[65%]">
                    <Image src={`/images/models/${card}-${color}.png`} alt="model" layout="fill" />
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
              type={color}
              small
              model={`/images/models/${model}-${color}.png`}
              userName={name.length === 0 ? 'Name' : name}
              userComment={comment.length === 0 ? 'Write down your own message to Internet Explorer.' : comment}
            />
          </article>
          <article className="flex flex-col">
            <h2 className="text-[20px] mb-1">Leave a message</h2>
            <input
              type="text"
              value={name}
              placeholder="Name"
              className="bg-black rounded-md text-[16px] p-1 mb-1 placeholder:text-[#646464]"
              onChange={(e) => setName(e.target.value)}
              maxLength={10}
            />
            <textarea
              value={comment}
              cols={5}
              rows={4}
              placeholder="Write down your own message to Internet Explorer."
              className="bg-black rounded-md text-[16px] p-1 resize-none placeholder:text-[#646464]"
              onChange={(e) => setComment(e.target.value)}
              maxLength={140}
            />
          </article>
        </section>
      </main>

      <button
        className={`rounded-2xl text-dark text-[26px] font-bold px-8 py-1 mt-6 ${
          name.length > 0 && comment.length > 0 ? 'bg-white' : 'bg-[#6c6c6c]'
        }`}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default Guest;
