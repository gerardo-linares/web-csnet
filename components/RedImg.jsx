import Image from "next/image";

const RedImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} `}>
      <Image
        className="rounded-[20px]"
        src={imgSrc}
        priority
        alt="RedImg"
        width={710}
        height={540}
      />
    </div>
  );
};

export default RedImg;
