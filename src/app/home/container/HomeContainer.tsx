import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { counterStore } from "~/stores/CounterStore/CounterStore";
import { headerStore } from "~/stores/HeaderStore/HeaderStore";
import { homeIntroStore } from "~/stores/HomeIntroStore/HomeIntroStore";
import { homePricingStore } from "~/stores/HomePricingStore/HomePricingStore";
import { homeServiceStore } from "~/stores/HomeServiceStore/HomeServiceStore";
import { homeSolutionStore } from "~/stores/HomeSolutionStore/HomeSolutionStore";
import { recentWorkStore } from "~/stores/RecentWorkStore/RecentWorkStore";
import { teamMemberStore } from "~/stores/TeamMemberStore/TeamMemberStore";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: headerStore,
    },

    homeContentModuleProps: {
      introContentProps: homeIntroStore,
      solutionContentProps: homeSolutionStore,
      counterContentProps: counterStore,
      serviceContentProps: homeServiceStore,
      recentWorkContentProps: recentWorkStore,
      teamContentProps: teamMemberStore,
      pricingContentProps: homePricingStore,
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
