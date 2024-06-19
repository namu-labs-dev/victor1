import Image from "next/image";
import "./custom.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { LinkListComponent } from "~/components/Components/LinkListComponent/LinkListComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type NavLinks = {
  id: number;
  to: string;
  title: string;
};

type Props = {
  navLinks: NavLinks[];
  aboutInfo: string;
  aboutTitle: string;
  aboutDesc: string;
};

export const HomeIntroModule = (props: Props) => {
  return (
    <div className="intro h-auto overflow-hidden bg-black pt-6">
      <div className="flex items-center justify-between overflow-hidden">
        <div className="z-10 px-8 py-0" style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} intro-design-text font-black text-white`}
          >
            WEB
          </div>
          <div
            className={`${inter.variable} design intro-design-text font-black text-transparent`}
          >
            DESIGN
          </div>
          <div
            className={`${inter.variable} intro-design-text font-black italic text-white`}
          >
            AGENCY
          </div>
        </div>

        <div className="pr-12">
          <Image
            src="/pngs/hero-right.png"
            alt="hero-right"
            width={320}
            height={320}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="hero flex w-full items-center pl-8" style={{}}>
        <div className="hero-image-container relative h-96 w-11/12">
          <Image
            src="/jpgs/hero.jpg"
            alt="hero"
            objectFit="cover"
            fill
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex w-1/12 flex-col items-end justify-between py-12 text-white">
          <LinkListComponent navLinks={props.navLinks} />
        </div>
      </div>

      <div className="max-768:flex-col flex gap-6 px-8 py-16 text-white">
        <div className="flex w-3/6 items-start justify-start">
          <div className="circle ">
            <Image
              src="/svgs/circle-text.svg"
              alt="circle-text"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div className="max-768:w-full flex flex-col gap-6 lg:w-3/6" style={{}}>
          <div className="info-text about-text">{props.aboutInfo}</div>

          <div className="title-text about-title-text">{props.aboutTitle}</div>

          <div className="desc-text mt-8 lg:pl-10">{props.aboutDesc}</div>

          <Link href="/" className="desc-text underline lg:pl-10">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
