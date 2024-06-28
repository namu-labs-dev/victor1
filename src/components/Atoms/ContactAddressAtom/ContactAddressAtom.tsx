import { PhoneFilled } from "@ant-design/icons";
import Link from "next/link";

type Props = {
  id: number;
  country: string;
  address: string;
  email: string;
  phone: string;
};

export const ContactAddressAtom = (props: Props) => {
  return (
    <div className='mt-10 flex flex-col gap-6'>
      <div className='text-[22px] font-bold text-white'>{props.country}</div>
      <div className='h-[1px] w-full bg-[#aaa]'></div>
      <div className='desc-text'>{props.address}</div>

      <div className='flex flex-col gap-2'>
        <Link
          href='mailto:support@gmail.com'
          className='text-[16px] text-primary-color hover:text-primary-color'
        >
          {props.email}
        </Link>

        <div className='flex items-center gap-4'>
          <div className='flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary-color'>
            <PhoneFilled className='text-lg ' />
          </div>
          <Link
            href='phone:+000 (123) 456 88'
            className='text-[16px] text-white hover:text-white'
          >
            {props.phone}
          </Link>
        </div>
      </div>
    </div>
  );
};
