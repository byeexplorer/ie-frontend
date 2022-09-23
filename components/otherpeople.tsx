import { useCommentStore } from 'lib/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GuestCard } from './common';
import ArrowIcon from './common/arrow-icon';

import { FreeMode } from 'swiper';

import 'swiper/css';

const test: Omit<CommentRes, 'id'>[] = [
  {
    color: 'blue',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'newest',
  },
  {
    color: 'gray',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'explorer',
  },
  {
    color: 'purple',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'edge',
  },
  {
    color: 'green',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'oldest',
  },
];

const Otherpeople = () => {
  const { comments } = useCommentStore();

  return (
    <section className="w-full text-center pt-[15%] pb-[3%] flex flex-col items-center">
      <h1>You can see other people!</h1>
      <h2 className="text-[1.5vw] mb-10">{comments.length} people left comments.</h2>
      <Swiper
        className="flex flex-nowrap max-w-[100vw] h-fix overflow-auto"
        style={{ padding: '1.5rem 0' }}
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode]}
      >
        {comments.map((comment, i) => (
          <SwiperSlide key={comment.id}>
            <GuestCard
              {...comment}
              className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
            />
          </SwiperSlide>
        ))}
        {test.map((v, i) => (
          <SwiperSlide key={i}>
            <GuestCard
              {...v}
              key={i}
              className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <article className="flex gap-2 mt-10">
        <ArrowIcon className="rotate-180" />
        <ArrowIcon />
      </article>
    </section>
  );
};

export default Otherpeople;
