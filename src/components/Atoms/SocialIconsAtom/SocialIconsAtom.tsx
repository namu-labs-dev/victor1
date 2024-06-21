import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  item: {
    id: number;
    title: string;
    icon: any;
  };
};

export const SocialIconsAtom = (props: Props) => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <SVGAtom
        iconName={props.item.icon}
        color='white'
        width={16}
        height={16}
      />
      <div className='info-text footer-icon-text'>{props.item.title}</div>
    </Link>
  );
};
