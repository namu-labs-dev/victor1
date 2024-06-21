import { AboutTemplate } from "~/components/Templates/About/AboutTemplate";
import { footerStore } from "~/stores/FooterStore/FooterStore";
import { headerStore } from "~/stores/HeaderStore/HeaderStore";

export const AboutContainer = () => {
  const aboutTemplateProps: React.ComponentProps<typeof AboutTemplate> = {
    aboutHeaderModuleProps: {
      headerProps: headerStore,
    },

    aboutFooterModuleProps: {
      footerContentProps: footerStore,
    },
  };

  return <AboutTemplate {...aboutTemplateProps} />;
};
