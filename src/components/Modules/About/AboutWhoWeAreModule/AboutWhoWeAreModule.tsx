import Marquee from "react-fast-marquee";
import { COLORS } from "~/constants/colors";
import "./custom.css";
import { WhoWeAreServiceComponent } from "~/components/Components/WhoWeAreServiceComponent/WhoWeAreServiceComponent";
import { ServiceSlideComponent } from "~/components/Components/ServiceSlideComponent/ServiceSlideComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import React from "react";

type Props = {
  whoWeAreInfo: string;
  whoWeAreTitle: string;
  services: React.ComponentProps<typeof WhoWeAreServiceComponent>;
  slide: React.ComponentProps<typeof ServiceSlideComponent>;
};

export const AboutWhoWeAreModule = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-6 bg-black'>
      <div className='flex flex-col items-center gap-6 p-8'>
        <AnimatedComponent direction='top'>
          <div className='flex flex-col items-center gap-6'>
            <div className='info-text'>{props.whoWeAreInfo}</div>

            <div className='title-text w-full text-center md:w-[70%]'>
              {props.whoWeAreTitle}
            </div>
          </div>
        </AnimatedComponent>

        <AnimatedComponent direction='bottom'>
          <div className='mt-16 flex flex-col gap-4 md:flex-row'>
            <WhoWeAreServiceComponent {...props.services} />
          </div>
        </AnimatedComponent>
      </div>

      <Marquee
        speed={200}
        className='overflow-hidden p-4 md:p-6'
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className='z-10 flex items-center gap-10 px-8 py-0'>
          <ServiceSlideComponent {...props.slide} />
        </div>
      </Marquee>
    </div>
  );
};
