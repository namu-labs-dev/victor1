import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { AboutIntroModule } from "~/components/Modules/About/AboutIntroModule/AboutIntroModule";
import { AboutTestimonialModule } from "~/components/Modules/About/AboutTestimonialModule/AboutTestimonialModule";
import { AboutWhoWeAreModule } from "~/components/Modules/About/AboutWhoWeAreModule/AboutWhoWeAreModule";
import { CounterModule } from "~/components/Modules/Counter/CounterModule";
import { GlobalClientModule } from "~/components/Modules/GlobalClient/GlobalClientModule";
import { TeamModule } from "~/components/Modules/Team/TeamModule";

type Props = {
  aboutHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  whoWAreContentProps: React.ComponentProps<typeof AboutWhoWeAreModule>;
  teamContentProps: React.ComponentProps<typeof TeamModule>;
  counterContentProps: React.ComponentProps<typeof CounterModule>;
  clientSayContentProps: React.ComponentProps<typeof AboutTestimonialModule>;
  clientContentProps: React.ComponentProps<typeof GlobalClientModule>;
  aboutFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const AboutTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowX: "hidden" }}>
      <Header className='header flex h-20 w-full items-center px-8'>
        <HeaderModule {...props.aboutHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "hidden" }}>
        <AboutIntroModule />
        <AboutWhoWeAreModule {...props.whoWAreContentProps} />
        <TeamModule {...props.teamContentProps} />
        <CounterModule {...props.counterContentProps} />
        <AboutTestimonialModule {...props.clientSayContentProps} />
        <GlobalClientModule {...props.clientContentProps} />
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.aboutFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
