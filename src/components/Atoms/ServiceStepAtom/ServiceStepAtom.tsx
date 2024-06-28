type Props = {
  id: number;
  title: string;
  desc: string;
};

export const ServiceStepAtom = (props: Props) => {
  return (
    <div className='step-container relative flex h-[280px] w-[280px] flex-col items-center justify-center gap-6 rounded-full p-10'>
      <div className='info-text step-text'>Step 0{props.id}</div>
      <div className='service-title-text'>{props.title}</div>

      <div className='divider h-[1px] w-full bg-gray-opacity'></div>

      <div className='desc-text step-text text-center'>{props.desc}</div>

      <div className='step-two absolute h-[280px] w-[280px] rounded-full'></div>
    </div>
  );
};
