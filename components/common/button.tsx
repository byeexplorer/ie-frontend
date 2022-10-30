type Props = {
  isActive: boolean;
  content: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ content, isActive, onClick, className }: Props) => {
  return (
    <button
      className={`rounded-2xl text-dark text-[26px] font-bold px-8 py-1 mt-6 ${
        isActive ? 'bg-white' : 'bg-[#6c6c6c]'
      } ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
