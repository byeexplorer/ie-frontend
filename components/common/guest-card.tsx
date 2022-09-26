import Image from 'next/image';
import { memo } from 'react';
import styles from 'styles/guestcard.module.scss';

type Props = Omit<CommentRes, 'id' | 'createdAt'> & {
  small?: boolean;
  createdAt?: string;
  className?: string;
};

const GuestCard = ({ color, comment, createdAt, name, obj, small, className }: Props) => {
  return (
    <div className={`${styles.guestcard} ${small ? styles.small : ''} ${className}`}>
      <section className={`${styles.gradient}`}>
        <div className={styles[color]} />
      </section>
      <section>
        <div className={`${styles.profile} ${styles['profile-' + color]}`}>
          <div className="relative w-full h-full aspect-square">
            <Image src={`/images/models/${obj}-${color}.png`} alt="object" layout="fill" />
          </div>
        </div>
        <article>
          <h3>{name}</h3>
          <p>{comment}</p>
        </article>
        {createdAt && <p className="text-right text-[0.9vw] mt-[3px]">{createdAt}</p>}
      </section>
    </div>
  );
};

export default memo(GuestCard);
