import { ServicesModule } from "~/components/Modules/Services/Service/ServicesModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { ServiceIntroModule } from "~/components/Modules/Services/ServiceIntro/ServiceIntroModule";
import { AboutTestimonialModule } from "~/components/Modules/About/AboutTestimonialModule/AboutTestimonialModule";
import { ServiceStepModule } from "~/components/Modules/Services/ServiceStep/ServiceStepModule";
import { ServiceSlideModule } from "~/components/Modules/Services/ServiceSlide/ServiceSlideModule";

type Props = {
  serviceHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  whoWAreContentProps: React.ComponentProps<typeof ServiceSlideModule>;
  clientSayContentProps: React.ComponentProps<typeof AboutTestimonialModule>;
  serviceContentProps: React.ComponentProps<typeof ServicesModule>;
  serviceStepContentProps: React.ComponentProps<typeof ServiceStepModule>;
  serviceFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const ServicesTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowX: "hidden" }}>
      <Header className='header flex h-20 w-full items-center px-8'>
        <HeaderModule {...props.serviceHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "hidden" }} className='bg-black'>
        <ServiceIntroModule />
        <ServicesModule {...props.serviceContentProps} />
        <ServiceSlideModule {...props.whoWAreContentProps} />
        <ServiceStepModule {...props.serviceStepContentProps} />
        <div className='bg-black pb-20'>
          <AboutTestimonialModule {...props.clientSayContentProps} />
        </div>
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.serviceFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
