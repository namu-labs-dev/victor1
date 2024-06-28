import { ServicesTemplate } from "~/components/Templates/Services/ServicesTemplate";
import { clientSayStore } from "~/stores/ClientSayStore/ClientSayStore";
import { footerStore } from "~/stores/FooterStore/FooterStore";
import { headerStore } from "~/stores/HeaderStore/HeaderStore";
import {
  serviceStepStore,
  serviceStore,
} from "~/stores/ServicseStore/ServicseStore";
import { whoWeAreStore } from "~/stores/WhoWeAreStore/WhoWeAreStore";

export const ServicesContainer = () => {
  const servicesTemplateProps: React.ComponentProps<typeof ServicesTemplate> = {
    serviceHeaderModuleProps: {
      headerProps: headerStore,
    },

    whoWAreContentProps: whoWeAreStore,
    clientSayContentProps: clientSayStore,
    serviceContentProps: serviceStore,
    serviceStepContentProps: serviceStepStore,

    serviceFooterModuleProps: {
      footerContentProps: footerStore,
    },
  };

  return <ServicesTemplate {...servicesTemplateProps} />;
};
