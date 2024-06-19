import { RecentWorkAtom } from "~/components/Atoms/RecentWorkAtom/RecentWorkAtom";

type RecentWorks = {
  id: number;
  title: string;
  img: string;
  url: string;
};

type Props = {
  recentWorks: RecentWorks[];
};

export const RecentWorkComponent = (props: Props) => {
  return (
    <>
      {props.recentWorks.map((item) => (
        <RecentWorkAtom key={item.id} item={item} />
      ))}
    </>
  );
};
