import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import "./custom.css";
import Image from "next/image";
import { ClientSayAtom } from "~/components/Atoms/ClientSayAtom/ClientSayAtom";
import { CarouselComponent } from "~/components/Components/CarouselComponent/CarouselComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  testimonies: React.ComponentProps<typeof ClientSayAtom>[];
};

export const ClientSayModule = (props: Props) => {
  return (
    <div className='bg-black p-8 py-16 pt-20'>
      <Marquee speed={200} className='overflow-hidden'>
        <div className='z-10 flex gap-10 py-0' style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} design solution-design-text font-black text-transparent`}
          >
            CLIENTS
          </div>
          <div
            className={`${inter.variable} solution-design-text font-black text-white`}
          >
            {"SAY'S"}
          </div>
        </div>
      </Marquee>

      <AnimatedComponent direction='bottom'>
        <div className='md:px-30 mt-16 flex flex-col items-center gap-8 p-0 sm:px-20 lg:h-[800px] lg:flex-row lg:p-0'>
          <div className='w-full lg:w-1/2'>
            <CarouselComponent slides={props.testimonies}>
              {props.testimonies.map((item) => (
                <ClientSayAtom key={item.id} {...item} />
              ))}
            </CarouselComponent>
          </div>

          <div className='relative h-96 w-full lg:h-full lg:w-1/2'>
            <Image
              fill
              src='/jpgs/testimonials-three.jpg'
              alt='Testimonial'
              className='h-full w-full object-contain lg:object-cover'
            />
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};
