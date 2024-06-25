import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  id: number;
  title: string;
  desc: string;
  icon: any;
  url: string;
};

export const ServiceAtom = (props: Props) => {
  return (
    <div className='service-card flex w-[100%] flex-col gap-8 p-4 sm:w-[80%] sm:p-6 md:w-[45%] lg:w-[24%]'>
      <div className='flex w-full justify-between'>
        <div
          className='info-text service-title w-[75%]  cursor-pointer'
          style={{ color: "white" }}
        >
          {props.title}
        </div>

        <div className='w-[20%]'>
          <SVGAtom iconName={props.icon} height={100} width={60} />
        </div>
      </div>

      <div className='desc-text'>{props.desc}</div>

      <div className='wrapper flex items-center'>
        <Link href={props.url} className='info-text service-link'>
          Read More
        </Link>

        <ArrowUpOutlined
          className='service-arrow-link cursor-pointer text-2xl text-white'
          rotate={45}
        />
      </div>
    </div>
  );
};
