import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  item: {
    id: number;
    to: string;
    title: string;
    icon: any;
  };
};

export const LinkListAtom = (props: Props) => {
  return (
    <Link href={props.item.to} className=''>
      <div className='transformLink hidden lg:block'>{props.item.title}</div>

      <div className='transformIcon block lg:hidden'>
        <SVGAtom
          iconName={props.item.icon}
          color='white'
          width={20}
          height={20}
        />
      </div>
    </Link>
  );
};
