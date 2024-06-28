import { ArrowUpOutlined } from "@ant-design/icons";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  id: number;
  title: string;
  desc: string;
  url: string;
};

export const ServicesAtom = (props: Props) => {
  return (
    <div className='service-container flex w-[100%] flex-col gap-4 border-b border-b-gray-opacity py-12 duration-500 ease-in hover:border-b-2 hover:border-b-primary-color md:w-[47%]'>
      <div className='flex w-full items-start justify-between'>
        <div
          className={`${inter.className} id-text text-[48px] text-gray-opacity`}
        >
          0{props.id}
        </div>

        <Link
          href='/'
          className='service-arrow-container flex h-[90px] w-[90px] items-center justify-center rounded-full'
        >
          <ArrowUpOutlined
            className='service-arrow-link cursor-pointer text-2xl text-primary-color'
            rotate={45}
          />
        </Link>
      </div>

      <Link href='/' className='info-text service-title-text'>
        {props.title}
      </Link>

      <div className='desc-text service-desc-text'>{props.desc}</div>
    </div>
  );
};
