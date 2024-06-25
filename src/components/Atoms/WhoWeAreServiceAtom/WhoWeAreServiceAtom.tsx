import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  id: number;
  title: string;
  desc: string;
  icon: any;
};

export const WhoWeAreServiceAtom = (props: Props) => {
  return (
    <div className='who-container flex w-full flex-col gap-8 md:w-[33%]'>
      <div className='flex items-center gap-4'>
        <SVGAtom
          iconName={props.icon}
          color='rgb(85, 230, 165)'
          width={60}
          height={60}
        />

        <div className='info-text who-info-text flex'>{props.title}</div>
      </div>

      <div className='who-divider h-[2px] w-full duration-500 ease-in-out'></div>

      <div className='desc-text'>{props.desc}</div>
    </div>
  );
};
