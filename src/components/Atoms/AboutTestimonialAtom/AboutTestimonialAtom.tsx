import Image from "next/image";
import { RatingAtom } from "../RatingAtom/RatingAtom";

type Props = {
  id: number;
  desc: string;
  author: string;
  role: string;
  star: React.ComponentProps<typeof RatingAtom>[];
};

export const AboutTestimonialAtom = (props: Props) => {
  return (
    <div className='flex w-full min-w-full flex-col gap-12'>
      <div
        className='text-[1.2rem] text-white lg:text-[1.6rem]'
        style={{ lineHeight: 1.7 }}
      >
        {props.desc}
      </div>

      <div className='flex flex-col justify-between gap-4 sm:flex-row'>
        <div className='flex gap-4'>
          <div className='relative h-[60px] w-[60px] rounded-full'>
            <Image
              fill
              src='/pngs/author1.png'
              alt='author'
              className='h-full w-full object-contain'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <div className='text-lg text-white lg:text-2xl'>{props.author}</div>
            <div className='desc-text test-author-text'>{props.role}</div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          {props.star.map((item, i) => (
            <RatingAtom key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
