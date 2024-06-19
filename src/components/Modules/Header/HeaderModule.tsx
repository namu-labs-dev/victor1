import Link from "next/link";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";

type Props = {
  // Add props here
};

export const HeaderModule = (props: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <LogoAtom />

      <div className="flex items-center gap-6 text-white">
        <Link href="/">Home +</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Pages +</Link>
        <Link href="/">Services +</Link>
        <Link href="/">Projects +</Link>
        <Link href="/">Blog +</Link>
      </div>
    </div>
  );
};
