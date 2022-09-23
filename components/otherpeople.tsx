import { useCommentStore } from 'lib/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GuestCard } from './common';
import ArrowIcon from './common/arrow-icon';

import { FreeMode } from 'swiper';
import styles from 'styles/swiper.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  {
    color: 'green',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'oldest',
  },
  {
    color: 'purple',
    comment: 'adsfasfdafdsafaselfhaeskfhekajsfekjajhfjk',
    createdAt: '2022.12.12',
    name: 'nadsfnasdf',
    obj: 'newest',
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

  //FIXME: length comments
  const swiperParams =
    test.length > 5
      ? {
          freeMode: true,
          slidesPerView: 5,
          slidesPerGroup: 5,
          loop: true,
        }
      : { slidesPerView: 5 };

  return (
    <section className="w-full text-center pt-[15%] pb-[3%] flex flex-col items-center">
      <h1>You can see other people!</h1>
      <h2 className="text-[1.5vw] mb-10">{comments.length} people left comments.</h2>
      <Swiper
        //FIXME: test tot comments
        className={`${styles.swiper} ${test.length < 5 && styles.non}`}
        style={{ padding: '1.5rem 0' }}
        modules={[FreeMode]}
        {...swiperParams}
      >
        {/* {comments.map((comment, i) => (
          <SwiperSlide key={comment.id}>
            <GuestCard
              {...comment}
              className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
            />
          </SwiperSlide>
        ))} */}
        {test.map((v, i) => (
          <SwiperSlide key={i} style={{ width: 'fit-content' }}>
            <GuestCard
              {...v}
              key={i}
              className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <article className="flex gap-2 mt-5">
        <ArrowIcon className="rotate-180" />
        <ArrowIcon />
      </article>
    </section>
  );
};

export default Otherpeople;
