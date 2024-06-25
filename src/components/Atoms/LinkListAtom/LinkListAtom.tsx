import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  id: number;
  to: string;
  title: string;
  icon: React.ComponentProps<typeof SVGAtom>["iconName"];
};

export const LinkListAtom = (props: Props) => {
  return (
    <Link href={props.to} className=''>
      <div className='transformLink hidden lg:block'>{props.title}</div>

      <div className='transformIcon block lg:hidden'>
        <SVGAtom iconName={props.icon} color='white' width={20} height={20} />
      </div>
    </Link>
  );
};
