import { ContactTemplate } from "~/components/Templates/Contact/ContactTemplate";
import { contactStore } from "~/stores/ContactStore/ContactStore";
import { footerStore } from "~/stores/FooterStore/FooterStore";
import { headerStore } from "~/stores/HeaderStore/HeaderStore";

export const ContactContainer = () => {
  const contactTemplateProps: React.ComponentProps<typeof ContactTemplate> = {
    contactHeaderModuleProps: {
      headerProps: headerStore,
    },

    contactContentModuleProps: {
      contactContentProps: contactStore,
    },

    conatctFooterModuleProps: {
      footerContentProps: footerStore,
    },
  };

  return <ContactTemplate {...contactTemplateProps} />;
};
