import Image from "next/image";
import "./custom.css";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import { AboutTestimonialAtom } from "~/components/Atoms/AboutTestimonialAtom/AboutTestimonialAtom";
import { CarouselComponent } from "~/components/Components/CarouselComponent/CarouselComponent";

type Props = {
  testimonies: React.ComponentProps<typeof AboutTestimonialAtom>[];
};

export const AboutTestimonialModule = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-12 overflow-hidden bg-black p-8 py-20 lg:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-1/2'>
        <AnimatedComponent direction='left'>
          <div className='relative flex w-full justify-center'>
            <div className='circular-border'></div>

            <div className='md:left-30 absolute -left-5 -top-16 h-[400px] w-[300px] sm:left-28 lg:-top-[98px] lg:left-10 lg:h-[490px] lg:w-[400px]'>
              <Image
                fill
                src='/pngs/testimonials-four.png'
                alt='testimonials'
                className='h-full w-full'
              />
            </div>
          </div>
        </AnimatedComponent>
      </div>

      {/* RIGHT */}
      <div className='w-full lg:w-1/2'>
        <AnimatedComponent direction='right'>
          <div className='flex w-full'>
            <CarouselComponent slides={props.testimonies}>
              {props.testimonies.map((item) => (
                <AboutTestimonialAtom key={item.id} {...item} />
              ))}

              {props.testimonies.slice(0, 1).map((item, index) => (
                <AboutTestimonialAtom key={index} {...item} />
              ))}
            </CarouselComponent>
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};
