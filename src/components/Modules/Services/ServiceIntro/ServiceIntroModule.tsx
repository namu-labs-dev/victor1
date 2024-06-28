import Image from "next/image";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

export const ServiceIntroModule = () => {
  return (
    <div className='bg-black'>
      <AnimatedComponent direction='top'>
        <div className='flex w-full flex-wrap bg-black px-8 py-20'>
          <div className='title-text service-intro-text'>Digital Services</div>
          <div className='relative h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px]'>
            <Image
              fill
              src='/pngs/leaf.png'
              alt=''
              className='h-full w-full rotate-45 object-contain'
            />
          </div>
          <div className='title-text service-intro-text'>
            For Web Design & Development
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};
