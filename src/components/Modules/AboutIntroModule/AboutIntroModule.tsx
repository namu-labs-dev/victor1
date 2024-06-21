import Image from "next/image";
import "./custom.css";

export const AboutIntroModule = () => {
  return (
    <div className='flex flex-col bg-black p-8'>
      <div className='flex w-[100%] flex-wrap items-start gap-0 max-768:my-0 max-768:w-full max-768:flex-col'>
        <div className='title-text about-intro-text'>We’re Digital</div>

        <div className='flex flex-wrap items-center'>
          <div className='title-text about-intro-text'>Web</div>
          <div className='relative h-[100px] w-[200px] rounded-full bg-slate-50 max-768:h-[50px] max-768:w-[100px]'>
            <Image
              fill
              src='/pngs/inside-title1.png'
              alt=''
              className='h-full w-full'
            />
          </div>

          <div className='relative h-[100px] w-[350px] rounded-full bg-slate-50 max-768:h-[50px] max-768:w-[150px]'>
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

      <div className='mt-12 h-[70vh] w-full'>
        <iframe
          src='https://www.youtube.com/embed/fOdo1GkzZAk?si=1oGSMxPiSyCack2B&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1&mute=1'
          width='100%'
          height='100%'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
