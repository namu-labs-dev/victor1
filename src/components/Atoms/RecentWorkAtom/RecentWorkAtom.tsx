import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  img: string;
  url: string;
};

export const RecentWorkAtom = (props: Props) => {
  return (
    <div className='project-container flex w-full items-center justify-between gap-6 py-14 max-768:flex-col max-768:py-10'>
      <div className='flex flex-col gap-8 lg:w-1/3'>
        <div
          className='title-text project-title-text'
          style={{ fontWeight: "normal" }}
        >
          0{props.id}
        </div>
        <Link
          href='/'
          className='info-text'
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          {props.title}
        </Link>
      </div>

      <div className='flex w-1/3 justify-center max-768:w-full'>
        <Image
          src={props.img}
          alt='project-timeline'
          width={400}
          height={400}
          className='object-contain'
        />
      </div>

      <div className='arrow-container w-1/3 justify-end lg:flex'>
        <Link
          href={props.url}
          className='flex h-full w-full items-center justify-center'
        >
          <ArrowUpOutlined
            className='arrow-link cursor-pointer text-2xl text-white'
            rotate={45}
          />
        </Link>
      </div>
    </div>
  );
};
