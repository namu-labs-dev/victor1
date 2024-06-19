import "./custom.css";
import { TeamComponent } from "~/components/Components/TeamComponent/TeamComponent";

type TeamMembers = {
  id: number;
  img: string;
  name: string;
  role: string;
  url: string;
};

type Props = {
  teamInfo: string;
  teamTitle: string;
  team: TeamMembers[];
};

export const TeamModule = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-black p-8">
      <div className="info-text">{props.teamInfo}</div>
      <div className="title-text">{props.teamTitle}</div>

      <div className="mt-10 flex w-full justify-between gap-6">
        <TeamComponent team={props.team} />
      </div>
    </div>
  );
};
