import Marquee from "react-fast-marquee";
import { ServiceSlideComponent } from "~/components/Components/ServiceSlideComponent/ServiceSlideComponent";
import { COLORS } from "~/constants/colors";

type Props = {
  slide: React.ComponentProps<typeof ServiceSlideComponent>;
};

export const ServiceSlideModule = (props: Props) => {
  return (
    <div className='w-full bg-black pt-20'>
      <Marquee
        speed={200}
        className='overflow-hidden p-4 md:p-10'
        style={{ backgroundColor: COLORS.primary }}
      >
        <div className='z-10 flex items-center gap-10 px-8 py-0'>
          <ServiceSlideComponent {...props.slide} />
        </div>
      </Marquee>
    </div>
  );
};
