import { AboutTemplate } from "~/components/Templates/About/AboutTemplate";
import { clientSayStore } from "~/stores/ClientSayStore/ClientSayStore";
import { clientStore } from "~/stores/ClientStore/ClientStore";
import { counterStore } from "~/stores/CounterStore/CounterStore";
import { footerStore } from "~/stores/FooterStore/FooterStore";
import { headerStore } from "~/stores/HeaderStore/HeaderStore";
import { teamMemberStore } from "~/stores/TeamMemberStore/TeamMemberStore";
import { whoWeAreStore } from "~/stores/WhoWeAreStore/WhoWeAreStore";

export const AboutContainer = () => {
  const aboutTemplateProps: React.ComponentProps<typeof AboutTemplate> = {
    aboutHeaderModuleProps: {
      headerProps: headerStore,
    },

    teamContentProps: teamMemberStore,
    counterContentProps: counterStore,
    whoWAreContentProps: whoWeAreStore,
    clientSayContentProps: clientSayStore,
    clientContentProps: clientStore,

    aboutFooterModuleProps: {
      footerContentProps: footerStore,
    },
  };

  return <AboutTemplate {...aboutTemplateProps} />;
};
