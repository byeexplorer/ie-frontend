import { useCommentStore } from 'lib/hooks';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { GuestCard } from './common';
import ArrowIcon from './common/arrow-icon';

import { Autoplay, FreeMode } from 'swiper';
import styles from 'styles/swiper.module.scss';

import 'swiper/css';

import { useEffect, useState } from 'react';

const defaultSwiperParams = {
  speed: 3000,
  autoplay: { delay: 0, disableOnInteraction: false, waitForTransition: false },
  slidesPerView: 5,
  freeMode: true,
  loop: true,
  modules: [FreeMode, Autoplay],
};

const Otherpeople = () => {
  const { comments } = useCommentStore();

  const [move, setMove] = useState({ prev: false, next: false });
  const [swiperParams, setSwiperParams] = useState<SwiperProps | null>(null);

  const onMouseDown = (isDown: boolean, isPrev = true) => {
    if (!isDown) {
      setMove({ prev: false, next: false });
    } else {
      setMove(isPrev ? { prev: true, next: false } : { prev: false, next: true });
    }
  };

  useEffect(() => {
    if (move.prev === true) {
      setSwiperParams((prev) => ({
        ...prev,
        speed: 1000,
        autoplay: { reverseDirection: true },
      }));
    }
    if (move.next === true) {
      setSwiperParams((prev) => ({
        ...prev,
        speed: 1000,
        autoplay: { reverseDirection: false },
      }));
    }
    if (!move.prev && !move.next) {
      setSwiperParams({ ...defaultSwiperParams, speed: 3000 });
    }
  }, [move]);

  useEffect(() => {
    setSwiperParams(defaultSwiperParams);
  }, [comments]);

  return (
    <section className="w-full text-center pt-[15%] pb-[3%] flex flex-col items-center" id="other-people">
      <h1>You can see other people!</h1>
      <h2 className="text-[1.5vw] mb-10">{comments.length} people left comments.</h2>
      {swiperParams && (
        <Swiper className={styles.swiper} {...swiperParams}>
          {comments.map((comment, i) => (
            <SwiperSlide key={comment.id} className={styles.slide}>
              <GuestCard
                {...comment}
                className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <article className="flex gap-2 mt-5">
        <ArrowIcon clicked={move.prev} onMouseDown={(isDown) => onMouseDown(isDown, true)} className="rotate-180" />
        <ArrowIcon clicked={move.next} onMouseDown={(isDown) => onMouseDown(isDown, false)} />
      </article>
    </section>
  );
};

export default Otherpeople;
