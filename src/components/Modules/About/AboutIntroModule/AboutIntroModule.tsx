import Image from "next/image";
import "./custom.css";
import { Inter } from "next/font/google";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const AboutIntroModule = () => {
  return (
    <div className='flex flex-col gap-4 bg-black p-8'>
      <AnimatedComponent direction='top'>
        <div className='flex w-[100%] flex-wrap items-center gap-2'>
          <div className='title-text about-intro-text'>We’re Digital</div>

          <div className='flex flex-wrap items-center'>
            <div className='title-text about-intro-text'>Web</div>
            <div className='relative h-[50px] w-[100px] rounded-full bg-slate-50 sm:h-[70px] sm:w-[140px] md:h-[100px] md:w-[200px]'>
              <Image
                fill
                src='/pngs/inside-title1.png'
                alt=''
                className='h-full w-full'
              />
            </div>

            <div className='relative h-[50px] w-[150px] rounded-full bg-slate-50 sm:h-[70px] sm:w-[210px] md:h-[100px] md:w-[350px]'>
              <Image
                fill
                src='/pngs/inside-title2.png'
                alt=''
                className='h-full w-full'
              />
            </div>
          </div>
        </div>

        <div className='title-text about-intro-text'>Development</div>

        <div className='flex items-center gap-16'>
          <div className='title-text about-intro-text'>Agency</div>

          <div className='rotating-border'></div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='left'>
        <div className='mt-12 h-[70vh] w-full'>
          <iframe
            src='https://www.youtube.com/embed/fOdo1GkzZAk?si=1oGSMxPiSyCack2B&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1&mute=1'
            width='100%'
            height='100%'
            allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </AnimatedComponent>

      <div className='mt-16 flex flex-col items-center gap-8 lg:flex-row'>
        <AnimatedComponent direction='left'>
          <div className='desc-text w-full text-center lg:w-1/2 lg:text-left'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat emey
            accusantium doloremque laudantium totam aperiam eaque quabillo
            inventore veritatisey quasi architecto beatae dictasunt
          </div>
        </AnimatedComponent>

        <div className='relative flex w-full items-center justify-center lg:w-1/2 lg:justify-end'>
          <AnimatedComponent direction='right'>
            <div
              className={`${inter.variable} year-design-text text-[4rem] font-black text-transparent md:text-[8rem] lg:mr-8 lg:text-[12rem]`}
            >
              1980
            </div>

            <Image
              src='/pngs/leaf.png'
              alt=''
              width={80}
              height={80}
              className='h-[40px] w-[40px] object-contain md:h-[80px] md:w-[80px] lg:absolute lg:bottom-20 lg:right-0'
            />
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};
