import Portal from 'components/common/portal';
import styles from 'styles/component.module.scss';

const Submit = () => {
  return (
    <Portal>
      <div className="w-screen h-screen bg-black opacity-70 fixed left-0 top-0 z-50 grid place-items-center">
        <svg width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.check} d="M1 21.5L26.4186 46.5L69 1" stroke="white" />
        </svg>
        <div className="w-[148px] h-[148px] border border-white absolute rounded-full" />
        <p className="absolute mt-[220px] text-[20px] font-bold">Submit!</p>
      </div>
    </Portal>
  );
};

export default Submit;
