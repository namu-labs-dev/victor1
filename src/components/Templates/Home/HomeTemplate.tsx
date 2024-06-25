import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { CounterModule } from "~/components/Modules/Counter/CounterModule";
import { BlogModule } from "~/components/Modules/Home/BlogModule/BlogModule";
import { ChooseUsModule } from "~/components/Modules/Home/ChooseUsModule/ChooseUsModule";
import { ClientSayModule } from "~/components/Modules/Home/ClientSayModule/ClientSayModule";
import { HomeIntroModule } from "~/components/Modules/Home/HomeIntroModule/HomeIntroModule";
import { HomePricingModule } from "~/components/Modules/Home/HomePricingModule/HomePricingModule";
import { HomeServiceModule } from "~/components/Modules/Home/HomeServiceModule/HomeServiceModule";
import { HomeSolutionModule } from "~/components/Modules/Home/HomeSolutionModule/HomeSolutionModule";
import { RecentWorkModule } from "~/components/Modules/Home/RecentWorkModule/RecentWorkModule";
import { TeamModule } from "~/components/Modules/Team/TeamModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  introContentProps: React.ComponentProps<typeof HomeIntroModule>;
  solutionContentProps: React.ComponentProps<typeof HomeSolutionModule>;
  counterContentProps: React.ComponentProps<typeof CounterModule>;
  serviceContentProps: React.ComponentProps<typeof HomeServiceModule>;
  recentWorkContentProps: React.ComponentProps<typeof RecentWorkModule>;
  teamContentProps: React.ComponentProps<typeof TeamModule>;
  pricingContentProps: React.ComponentProps<typeof HomePricingModule>;
  chooseContentProps: React.ComponentProps<typeof ChooseUsModule>;
  clientSayContentProps: React.ComponentProps<typeof ClientSayModule>;
  blogContentProps: React.ComponentProps<typeof BlogModule>;
  homeFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowX: "hidden" }}>
      <Header className='header relative flex h-20 w-full items-center px-8'>
        <div className='right-animation'></div>
        <HeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "hidden" }} className=''>
        <HomeIntroModule {...props.introContentProps} />
        <HomeSolutionModule {...props.solutionContentProps} />
        <CounterModule {...props.counterContentProps} />
        <HomeServiceModule {...props.serviceContentProps} />
        <RecentWorkModule {...props.recentWorkContentProps} />
        <TeamModule {...props.teamContentProps} />
        <HomePricingModule {...props.pricingContentProps} />
        <ChooseUsModule {...props.chooseContentProps} />
        <ClientSayModule {...props.clientSayContentProps} />
        <BlogModule {...props.blogContentProps} />
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
