import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
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
    <div className='flex flex-col items-center justify-center gap-6 bg-black p-8'>
      <AnimatedComponent direction='top'>
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='info-text team-info-text'>{props.teamInfo}</div>
          <div className='title-text team-title-text'>{props.teamTitle}</div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='bottom'>
        <div className='mt-10 flex w-full flex-wrap justify-center gap-2'>
          <TeamComponent team={props.team} />
        </div>
      </AnimatedComponent>
    </div>
  );
};
