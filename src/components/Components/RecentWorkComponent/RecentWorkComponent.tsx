import { RecentWorkAtom } from "~/components/Atoms/RecentWorkAtom/RecentWorkAtom";

type Props = React.ComponentProps<typeof RecentWorkAtom>[];

export const RecentWorkComponent = (props: Props) => {
  const recentWorks = Object.values(props);

  return (
    <>
      {recentWorks.map((item) => (
        <RecentWorkAtom key={item.id} {...item} />
      ))}
    </>
  );
};
