import { SocialIconsAtom } from "~/components/Atoms/SocialIconsAtom/SocialIconsAtom";

type SocialIcons = {
  id: number;
  title: string;
  icon: string;
};

type Props = {
  socialIcons: SocialIcons[];
};

export const SocialIconsComponent = (props: Props) => {
  return (
    <div className='flex items-center gap-16 flex-wrap max-768:gap-6'>
      {props.socialIcons.map((item) => (
        <SocialIconsAtom key={item.id} item={item} />
      ))}
    </div>
  );
};
