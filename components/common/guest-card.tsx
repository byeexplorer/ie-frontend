import { memo, useState } from 'react';
import styles from 'styles/guestcard.module.scss';

type Props = {
  type: 'blue' | 'green' | 'purple' | 'gray';
  isView?: boolean;
  userName?: string;
  userComment?: string;
};

const Mode1 = ({ comment, name }: { name: string; comment: string }) => {
  return (
    <div className={styles.view}>
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};
const ViewMode = memo(Mode1);

const WritingMode = () => {
  // TODO: check design
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styles.writing}>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Comment
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
    </div>
  );
};

const GuestCard = ({ userComment, userName, type, isView = false }: Props) => {
  return (
    <div className={styles.guestcard}>
      <section className={`${styles.gradient} ${styles[type]}`} />
      <section className={styles.cardcontent}>
        <div className={`${styles.profile} ${styles['profile-' + type]}`}></div>
        {isView ? <ViewMode name={userName ?? ''} comment={userComment ?? ''} /> : <WritingMode />}
      </section>
    </div>
  );
};

export default memo(GuestCard);
