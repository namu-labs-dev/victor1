import { QuickLinksAtom } from "~/components/Atoms/QuickLinksAtom/QuickLinksAtom";

type QuickLinks = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  quickLinks: QuickLinks[];
};

export const QuickLinksComponent = (props: Props) => {
  return (
    <ul className='mt-8 flex flex-col gap-4 text-lg text-[#aaa] max-768:mt-0'>
      {props.quickLinks.map((item) => (
        <QuickLinksAtom key={item.id} item={item} />
      ))}
    </ul>
  );
};
