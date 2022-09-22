import { formatToDate } from 'lib/utils';
import Image from 'next/image';
import { memo } from 'react';
import styles from 'styles/guestcard.module.scss';

type Props = {
  type: CardColor;
  userName: string;
  userComment: string;
  model: string;
  small?: boolean;
};

const GuestCard = ({ type, small, model, userComment, userName }: Props) => {
  return (
    <div className={`${styles.guestcard} ${small ? styles.small : ''}`}>
      <section className={`${styles.gradient} ${styles[type]}`} />
      <section>
        <div className={`${styles.profile} ${styles['profile-' + type]}`}>
          <div className="relative w-full h-full aspect-square">
            <Image src={model} alt="model" layout="fill" />
          </div>
        </div>
        <article>
          <h3>{userName}</h3>
          <p>{userComment}</p>
        </article>
        {!small && <p className="text-right text-[0.9vw] mt-[3px]">{formatToDate(new Date())}</p>}
      </section>
    </div>
  );
};

export default memo(GuestCard);
