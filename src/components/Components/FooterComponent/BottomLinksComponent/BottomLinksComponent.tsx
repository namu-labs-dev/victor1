import { BottomLinksAtom } from "~/components/Atoms/BottomLinksAtom/BottomLinksAtom";

type BottomLinks = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  bottomLinks: BottomLinks[];
};

export const BottomLinksComponent = (props: Props) => {
  return (
    <ul className='flex gap-10 text-lg text-white max-768:gap-6 max-768:text-sm'>
      {props.bottomLinks.map((item) => (
        <BottomLinksAtom key={item.id} item={item} />
      ))}
    </ul>
  );
};
