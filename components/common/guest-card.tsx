import { formatToDate } from 'lib/utils';
import { memo } from 'react';
import styles from 'styles/guestcard.module.scss';

type Props = {
  type: 'blue' | 'green' | 'purple' | 'gray';
  userName?: string;
  userComment?: string;
  onChange?: (type: 'name' | 'comment', value: string) => void;
};

const ViewMode = ({ comment, name }: { name: string; comment: string }) => {
  return (
    <div className={styles.view}>
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};

const WritingMode = ({ userName, onChange, userComment }: Props) => {
  if (!onChange) return null;

  return (
    <div className={styles.writing}>
      <input
        className={`placeholder:text-white w-full text-[1.5vw] pt-2 pl-1 font-bold ${
          !userName ? 'border-b-white border-b-[0.5px]' : ''
        }`}
        value={userName}
        onChange={(e) => onChange('name', e.target.value)}
        placeholder="Name"
      />
      <textarea
        className={`w-full h-full text-[1.2vw] mt-1 pl-1 placeholder:text-white resize-none ${
          !userComment ? 'border-b-white border-b-[0.5px]' : ''
        }`}
        cols={4}
        value={userComment}
        onChange={(e) => onChange('comment', e.target.value)}
        placeholder="leave a comment"
      />
      <p className="text-right text-[0.9vw] mt-[3px]">{formatToDate(new Date())}</p>
    </div>
  );
};

const GuestCard = (props: Props) => {
  const { type, onChange, userComment, userName } = props;

  return (
    <div className={styles.guestcard}>
      <section className={`${styles.gradient} ${styles[type]}`} />
      <section className={styles.cardcontent}>
        <div className={`${styles.profile} ${styles['profile-' + type]}`}></div>
        {onChange ? <WritingMode {...props} /> : <ViewMode name={userName ?? ''} comment={userComment ?? ''} />}
      </section>
    </div>
  );
};

export default memo(GuestCard);
