import Image from "next/image";
import Link from "next/link";

type Props = {
  width: number,
  height: number
}

export const LogoAtom = (props: Props) => {
  return (
    <Link href="/">
      <Image
        src="/pngs/logo.png"
        alt="logo"
        width={props.width}
        height={props.height}
        style={{ objectFit: "contain", cursor: "pointer" }}
      />
    </Link>
  );
};
