import Image from 'next/image';
import { forwardRef, memo } from 'react';

type Props = {
  className: string;
  src: string;
  id?: string;
  alt?: string;
};

const ImageWrapper = forwardRef<HTMLDivElement, Props>(({ className, src, alt, id }, ref) => (
  <div className={className} id={id} ref={ref}>
    <Image src={src} alt={alt ? alt : 'image'} layout="fill" priority={true} />
  </div>
));

ImageWrapper.displayName = 'ImageWrapper';
export default memo(ImageWrapper);
