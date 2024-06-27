import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  id: number;
  title: string;
  icon: React.ComponentProps<typeof SVGAtom>["iconName"];
};

export const SocialIconsAtom = (props: Props[]) => {
  const socialIcons = Object.values(props);

  return (
    <div className='flex flex-wrap items-center gap-6'>
      {socialIcons.map((item) => (
        <Link href='/' className='flex items-center gap-2' key={item.id}>
          <SVGAtom iconName={item.icon} color='white' width={16} height={16} />
          <div className='footer-icon-text text-lg text-white'>
            {item?.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
