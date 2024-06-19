import Image from "next/image";
import Link from "next/link";

export const LogoAtom = () => {
  return (
    <Link href="/">
      <Image
        src="/pngs/logo.png"
        alt="logo"
        width={150}
        height={100}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />
    </Link>
  );
};
