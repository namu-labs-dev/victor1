import { TeamAtom } from "~/components/Atoms/TeamAtom/TeamAtom";

type Props = React.ComponentProps<typeof TeamAtom>[];

export const TeamComponent = (props: Props) => {
  const team = Object.values(props);

  return (
    <>
      {team.map((item) => (
        <TeamAtom key={item.id} {...item} />
      ))}
    </>
  );
};
