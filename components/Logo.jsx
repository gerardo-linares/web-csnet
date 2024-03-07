import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.png" width={154} height={44} priority alt="Logotipo" />
    </Link>
  );
};

export default Logo;
