import Image from "next/image";
import { useState } from "react";

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <Image src={imgSrc} alt={alt} onError={handleError} {...props} />;
};

export default ImageWithFallback;
