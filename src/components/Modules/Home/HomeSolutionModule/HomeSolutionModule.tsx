import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import "./custom.css";
import Image from "next/image";
import { SolutionComponent } from "~/components/Components/SolutionComponent/SolutionComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  solutionInfo: string;
  solutionTitle: string;
  solutions: React.ComponentProps<typeof SolutionComponent>;
};

export const HomeSolutionModule = (props: Props) => {
  return (
    <div className='relative bg-black p-8'>
      {/* <div className='right-animation z-[0]'></div> */}

      <Marquee speed={200} className='z-[1] overflow-hidden'>
        <div className='z-10 flex gap-10 px-8 py-0' style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} solution-design-text font-black text-white`}
          >
            WEB
          </div>
          <div
            className={`${inter.variable} design solution-design-text font-black text-transparent`}
          >
            DESIGN
          </div>
          <div
            className={`${inter.variable} solution-design-text font-black text-white`}
          >
            AGENCY
          </div>
        </div>
      </Marquee>

      <AnimatedComponent direction='bottom'>
        <div className='z-[1] pt-12'>
          <div className='flex gap-8 max-768:flex-col'>
            <div className='flex flex-col gap-8 sm:w-full lg:w-1/2'>
              <div className='info-text solution-info-text'>
                {props.solutionInfo}
              </div>

              <div className='title-text solution-title-text'>
                {props.solutionTitle}
              </div>

              <SolutionComponent {...props.solutions} />
            </div>

            <div className='lg:w-1/2 max-768:w-full'>
              <Image
                src='/jpgs/what-we-do.jpg'
                alt=''
                width={500}
                height={500}
                className='h-full w-full object-contain'
              />
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};
