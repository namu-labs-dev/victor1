import Image from "next/image";

type Props = {
  id: number;
  img: string;
};

export const GlobalClientAtom = (props: Props) => {
  return (
    <div className='relative h-[50px] w-[100px]'>
      <Image
        fill
        src={props.img}
        alt='client logo'
        className='h-full w-full object-contain'
      />
    </div>
  );
};
