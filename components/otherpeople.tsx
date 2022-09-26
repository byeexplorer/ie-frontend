import { useCommentStore } from 'lib/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GuestCard } from './common';
import ArrowIcon from './common/arrow-icon';

import { Autoplay, FreeMode, Navigation } from 'swiper';
import styles from 'styles/swiper.module.scss';

import 'swiper/css';

import { useMemo, useState } from 'react';

const Otherpeople = () => {
  const { comments } = useCommentStore();
  const [hover, setHover] = useState({ prev: false, next: false });

  const swiperParams = useMemo(
    () =>
      comments.length > 5
        ? {
            freeMode: true,
            slidesPerView: 5,
            speed: 2000,
            loop: true,
            autoplay: { delay: 1000, disableOnInteraction: false, waitForTransition: false },
          }
        : { slidesPerView: 5 },
    [comments]
  );

  const onHoverToggle = (isHover: boolean, isPrev = true) => {
    setHover(isPrev ? { ...hover, prev: isHover } : { ...hover, next: isHover });
  };

  return (
    <section className="w-full text-center pt-[15%] pb-[3%] flex flex-col items-center">
      <h1>You can see other people!</h1>
      <h2 className="text-[1.5vw] mb-10">{comments.length} people left comments.</h2>
      <Swiper
        className={`${styles.swiper} ${comments.length < 5 && styles.non}`}
        style={{ padding: '1.5rem 0' }}
        modules={[FreeMode, Autoplay, Navigation]}
        spaceBetween={0}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        {...swiperParams}
      >
        {comments.map((comment, i) => (
          <SwiperSlide key={comment.id}>
            <GuestCard
              {...comment}
              className={`${i % 2 === 0 ? 'rotate-[7deg] translate-y-[-40px]' : 'rotate-[-7deg] translate-y-[40px]'}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <article className="flex gap-2 mt-5">
        <ArrowIcon
          hover={hover.prev}
          onHoverToggle={(v) => onHoverToggle(v)}
          className="rotate-180 swiper-button-prev"
        />
        <ArrowIcon hover={hover.next} onHoverToggle={(v) => onHoverToggle(v, false)} className="swiper-button-next" />
      </article>
    </section>
  );
};

export default Otherpeople;
