import { useCommentStore } from 'lib/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GuestCard } from './common';
import ArrowIcon from './common/arrow-icon';

import { Autoplay, FreeMode } from 'swiper';
import styles from 'styles/swiper.module.scss';

import 'swiper/css';
import { useMemo, useState } from 'react';

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
  const [hover, setHover] = useState(false);

  //FIXME: length comments
  const swiperParams = useMemo(
    () =>
      test.length > 5
        ? {
            freeMode: true,
            slidesPerView: 5,
            slidesPerGroup: 1,
            speed: 5000,
            loop: true,
            autoplay: { delay: 0, disableOnInteraction: false, waitForTransition: false },
            // speed: 5000,
            //FIXME: test to comments
            // speed: (hover ? 1000 : 7000) * test.length,
          }
        : { slidesPerView: 5 },
    [comments, hover]
  );

  const onHoverToggle = (isHover: boolean) => {
    setHover(isHover);
  };

  return (
    <section className="w-full text-center pt-[15%] pb-[3%] flex flex-col items-center">
      <h1>You can see other people!</h1>
      <h2 className="text-[1.5vw] mb-10">{comments.length} people left comments.</h2>
      <Swiper
        //FIXME: test to comments
        className={`${styles.swiper} ${test.length < 5 && styles.non}`}
        style={{ padding: '1.5rem 0' }}
        modules={[FreeMode, Autoplay]}
        spaceBetween={0}
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
        <ArrowIcon {...{ hover, onHoverToggle }} className="rotate-180" />
        <ArrowIcon {...{ hover, onHoverToggle }} />
      </article>
    </section>
  );
};

export default Otherpeople;

// swiper 라이브러리 사용 불가능인데, 안에 animation을 넣어서 하는 방법으로 가야할듯?
