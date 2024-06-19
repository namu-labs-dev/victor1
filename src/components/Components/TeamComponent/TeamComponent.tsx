import { TeamAtom } from "~/components/Atoms/TeamAtom/TeamAtom";

type TeamMembers = {
  id: number;
  img: string;
  name: string;
  role: string;
  url: string;
};

type Props = {
  team: TeamMembers[];
};

export const TeamComponent = (props: Props) => {
  return (
    <>
      {props.team.map((item) => (
        <TeamAtom key={item.id} item={item} />
      ))}
    </>
  );
};
