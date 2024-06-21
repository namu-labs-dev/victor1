import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import "./custom.css";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header className='header flex h-20 w-full items-center px-8'>
        <HeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }} className=''>
        <HomeContentModule {...props.homeContentModuleProps} />
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
