import Image from "next/image";

const RedImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} `}>
      <Image
        className="rounded-[20px]"
        src={imgSrc}
        fill
        priority
        alt="RedImg"
      />
    </div>
  );
};

export default RedImg;
