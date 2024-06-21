import {
  CalendarOutlined,
  WechatOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    id: number;
    title: string;
    url: string;
    date: string;
    comment: string;
    img: string;
  };
};

export const BlogAtom = (props: Props) => {
  return (
    <div className='flex flex-1 flex-col gap-6 max-768:gap-4'>
      <div className='relative h-72 w-auto max-768:h-56'>
        <Image
          fill
          src={props.item.img}
          alt='blogImg'
          className='h-full w-full object-cover'
        />
      </div>

      <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
          <CalendarOutlined className='text-lg text-white' />

          <div className='desc-text max-768:text-sm'>{props.item.date}</div>
        </div>

        <div className='h-2 w-2 rounded-full bg-white'></div>

        <div className='flex items-center gap-2'>
          <WechatOutlined className='text-lg text-white' />
          <div className='desc-text max-768:text-sm'>COMMENT ({props.item.comment})</div>
        </div>
      </div>

      <div className='blog-horizontal-line'></div>

      <Link href={props.item.url} className='info-text blog-item-title-text'>
        {props.item.title}
      </Link>

      <Link href={props.item.url} className='flex items-center gap-4'>
        <div className='info-text blog-read-more'>Read More</div>

        <ArrowUpOutlined
          className='blog-arrow-icon cursor-pointer text-lg text-white'
          rotate={45}
        />
      </Link>
    </div>
  );
};
