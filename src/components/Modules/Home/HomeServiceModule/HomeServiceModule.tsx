import "./custom.css";
import Marquee from "react-fast-marquee";
import { Inter } from "next/font/google";
import { ServiceComponent } from "~/components/Components/ServiceComponent/ServiceComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  serviceInfo: string;
  serviceTitle: string;
  services: React.ComponentProps<typeof ServiceComponent>;
};

export const HomeServiceModule = (props: Props) => {
  return (
    <div className='service flex w-full flex-col items-center gap-6 bg-black p-8 pt-16'>
      <AnimatedComponent direction='top'>
        <div className='flex w-full flex-col items-center gap-6'>
          <div className='info-text service-info-text'>{props.serviceInfo}</div>
          <div className='title-text service-title-text w-full text-center sm:w-full lg:w-3/4'>
            {props.serviceTitle}
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='bottom'>
        <div className='mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row lg:flex lg:flex-row'>
          <ServiceComponent {...props.services} />
        </div>
      </AnimatedComponent>

      <Marquee speed={200} className='mt-8 overflow-hidden'>
        <div className='z-10 flex gap-10 px-8 py-0' style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} design service-design-text font-black text-transparent`}
          >
            DIGITAL
          </div>
          <div
            className={`${inter.variable} service-design-text font-black text-white`}
          >
            SOLUTION
          </div>
        </div>
      </Marquee>
    </div>
  );
};
