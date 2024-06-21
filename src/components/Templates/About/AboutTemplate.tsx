import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";
import { AboutContentModule } from "~/components/Modules/About/AboutContentModule";

type Props = {
  aboutHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  aboutFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const AboutTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header className='header flex h-20 w-full items-center px-8'>
        <HeaderModule {...props.aboutHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <AboutContentModule />
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.aboutFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
