const ArrowIcon = ({
  className,
  clicked,
  onMouseDown,
}: {
  className?: string;
  clicked: boolean;
  onMouseDown: (isDown: boolean) => void;
}) => {
  const handleMouseEvent = (isDown = false) => {
    onMouseDown(isDown);
  };

  return (
    <div
      className={`w-fit ${className} cursor-pointer`}
      onMouseDown={() => handleMouseEvent(true)}
      onMouseUp={() => handleMouseEvent()}
    >
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24.1197" cy="24.4995" r="23.8823" fill={clicked ? '#fff' : '#555555'} />
        <path
          d="M11.564 22.9691C10.7185 22.9691 10.033 23.6545 10.033 24.5C10.033 25.3455 10.7185 26.0309 11.564 26.0309V22.9691ZM38.0598 25.5825C38.6576 24.9847 38.6576 24.0153 38.0598 23.4175L28.317 13.6748C27.7192 13.0769 26.7499 13.0769 26.152 13.6748C25.5541 14.2726 25.5541 15.2419 26.152 15.8398L34.8122 24.5L26.152 33.1602C25.5541 33.7581 25.5541 34.7274 26.152 35.3252C26.7499 35.9231 27.7192 35.9231 28.317 35.3252L38.0598 25.5825ZM11.564 26.0309H36.9772V22.9691H11.564V26.0309Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;
