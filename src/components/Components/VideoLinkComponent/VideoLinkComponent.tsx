import { PlayCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const VideoLinkComponent = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowIframe(true);
  };

  return (
    <div className='relative mt-12 h-[600px] w-full'>
      {!showIframe && (
        <>
          <Image
            fill
            src='/jpgs/thumbnail.jpg'
            alt='thumbnail'
            className='h-full w-full object-fill'
          />

          <div className='bg-black-opacity absolute flex h-full w-full items-center justify-center'>
            <Link
              target='_blanc'
              onClick={handleClick}
              href='https://www.youtube.com/embed/fOdo1GkzZAk?si=1oGSMxPiSyCack2B&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1&mute=1'
              className='flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white'
              rel='noopener noreferrer'
            >
              <PlayCircleFilled className='text-[35px] text-primary-color' />
            </Link>
          </div>
        </>
      )}

      {showIframe && (
        <iframe
          src='https://www.youtube.com/embed/fOdo1GkzZAk?si=1oGSMxPiSyCack2B&controls=0&showinfo=0&rel=0&modestbranding=1&autoplay=1&mute=1'
          width='100%'
          height='100%'
          allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};
