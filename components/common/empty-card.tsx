import { memo } from 'react';
import styles from 'styles/guestcard.module.scss';

const EmptyCard = () => {
  // TODO: carousel
  return (
    <div className={styles.empty}>
      <section className={styles.emptygradient} />
      <section className={styles.emptycontent}>
        <div className={styles.emptyprofile}>
          <div className={styles.circle} />
        </div>
      </section>
    </div>
  );
};

export default memo(EmptyCard);
