import Image from "next/image";

const Avatar = ({ src, alt, size = 64 }) => {
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
