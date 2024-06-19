import { HomeIntroModule } from "~/components/Modules/Home/HomeIntroModule/HomeIntroModule";
import { HomeSolutionModule } from "~/components/Modules/Home/HomeSolutionModule/HomeSolutionModule";
import { CounterModule } from "../Counter/CounterModule";
import { HomeServiceModule } from "./HomeServiceModule/HomeServiceModule";
import { RecentWorkModule } from "./RecentWorkModule/RecentWorkModule";
import { TeamModule } from "../Team/TeamModule";
import { HomePricingModule } from "./HomePricingModule/HomePricingModule";

type Props = {
  introContentProps: React.ComponentProps<typeof HomeIntroModule>;
  solutionContentProps: React.ComponentProps<typeof HomeSolutionModule>;
  counterContentProps: React.ComponentProps<typeof CounterModule>;
  serviceContentProps: React.ComponentProps<typeof HomeServiceModule>;
  recentWorkContentProps: React.ComponentProps<typeof RecentWorkModule>;
  teamContentProps: React.ComponentProps<typeof TeamModule>;
  pricingContentProps: React.ComponentProps<typeof HomePricingModule>;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div>
      <HomeIntroModule {...props.introContentProps} />
      <HomeSolutionModule {...props.solutionContentProps} />
      <CounterModule {...props.counterContentProps} />
      <HomeServiceModule {...props.serviceContentProps} />
      <RecentWorkModule {...props.recentWorkContentProps} />
      <TeamModule {...props.teamContentProps} />
      <HomePricingModule {...props.pricingContentProps} />
    </div>
  );
};
