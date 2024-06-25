import {
  ArrowUpOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  img: string;
  name: string;
  role: string;
  url: string;
};

export const TeamAtom = (props: Props) => {
  return (
    <div className='team-container flex flex-col gap-6'>
      <div className='relative h-[300px] w-[250px]'>
        <Image
          fill
          src={props.img}
          alt='member1'
          className='h-full w-full object-cover'
        />
      </div>

      <div className='details-container'>
        <div className='team-name-container'>
          <div className='team-name flex w-full items-start justify-between'>
            <div className='info-text member-name w-1/2'>{props.name}</div>

            <ArrowUpOutlined
              className='member-arrow-link cursor-pointer text-2xl text-white'
              rotate={45}
            />
          </div>

          <div className='desc-text team-role'>{props.role}</div>
        </div>

        <div className='view-detail-container flex flex-col gap-4'>
          <div className='flex w-full gap-2'>
            <Link href={props.url} className='info-text view-details'>
              View Details
            </Link>

            <ArrowUpOutlined
              className='member-arrow-link cursor-pointer text-lg'
              rotate={45}
            />
          </div>

          <div className='flex gap-3'>
            <Link href={props.url} className='social-icon'>
              <FacebookOutlined className='text-lg' />
            </Link>

            <Link href={props.url} className='social-icon'>
              <TwitterOutlined className='text-lg' />
            </Link>

            <Link href={props.url} className='social-icon'>
              <InstagramOutlined className='text-lg' />
            </Link>

            <Link href={props.url} className='social-icon'>
              <LinkedinOutlined className='text-lg' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
