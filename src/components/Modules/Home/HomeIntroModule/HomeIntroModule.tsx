import Image from "next/image";
import "./custom.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { LinkListComponent } from "~/components/Components/LinkListComponent/LinkListComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  navLinks: React.ComponentProps<typeof LinkListComponent>;
  aboutInfo: string;
  aboutTitle: string;
  aboutDesc: string;
};

export const HomeIntroModule = (props: Props) => {
  return (
    <div className='intro h-auto overflow-hidden bg-black'>
      <AnimatedComponent direction='top'>
        <div className='relative flex items-center justify-between overflow-hidden'>
          <div className='z-10 px-8 py-0' style={{ lineHeight: 0.9 }}>
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

          <div className='absolute right-0 top-0 z-[1] h-[100px] w-[100px] pr-12 sm:h-[150px] sm:w-[150px] md:h-[250px] md:w-[250px] lg:right-10'>
            <Image
              src='/pngs/hero-right.png'
              alt='hero-right'
              fill
              className='h-full w-full object-contain'
            />
          </div>

          <div className='right-animation'></div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='left'>
        <div className='hero flex h-96 w-full items-center pl-8' style={{}}>
          <div className='hero-image-container relative h-full w-10/12 lg:w-11/12'>
            <Image
              src='/jpgs/hero.jpg'
              alt='hero'
              objectFit='cover'
              fill
              className='h-full w-full object-contain'
            />
          </div>

          <div className='flex h-[50%] w-2/12 flex-col items-center justify-between py-0 text-white md:h-[90%] lg:h-full lg:w-1/12 lg:items-end'>
            <LinkListComponent {...props.navLinks} />
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='bottom'>
        <div className='flex gap-6 px-8 py-16 text-white max-768:flex-col'>
          <div className='flex w-3/6 items-start justify-start'>
            <div className='circle '>
              <Image
                src='/svgs/circle-text.svg'
                alt='circle-text'
                width={200}
                height={200}
              />
            </div>
          </div>

          <div
            className='flex flex-col gap-6 lg:w-3/6 max-768:w-full'
            style={{}}
          >
            <div className='info-text about-text'>{props.aboutInfo}</div>

            <div className='title-text about-title-text'>
              {props.aboutTitle}
            </div>

            <div className='desc-text mt-8 lg:pl-10'>{props.aboutDesc}</div>

            <Link href='/' className='desc-text underline lg:pl-10'>
              Read More
            </Link>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};
