import { Inter } from "next/font/google";
import SVGAtom from "../SVGAtom/SVGAtom";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  id: number;
  title: string;
};

export const ServiceSlideAtom = (props: Props) => {
  return (
    <>
      <div
        className={`${inter.variable} service-design-text text-[2rem] font-black text-black md:text-[4rem]`}
      >
        {props.title}
      </div>

      <SVGAtom iconName='star' color='black' width={60} height={60} />
    </>
  );
};
