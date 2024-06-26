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
    <Link href={props.to} className='flex transform items-center gap-2'>
      <div className=''>
        <SVGAtom iconName={props.icon} color='white' width={16} height={16} />
      </div>

      <div className='max-920:hidden'>{props.title}</div>
    </Link>
  );
};
