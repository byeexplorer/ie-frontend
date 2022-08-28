import styles from 'styles/guestcard.module.scss';

type Props = {};

const EmptyCard = (props: Props) => {
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

export default EmptyCard;
