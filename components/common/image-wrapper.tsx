import Image from 'next/image';
import { memo } from 'react';

type Props = {
  className: string;
  src: string;
  id?: string;
  alt?: string;
};

const ImageWrapper = ({ className, src, alt, id }: Props) => {
  return (
    <div className={className} id={id}>
      <Image src={src} alt={alt ? alt : 'image'} layout="fill" />
    </div>
  );
};

export default memo(ImageWrapper);
