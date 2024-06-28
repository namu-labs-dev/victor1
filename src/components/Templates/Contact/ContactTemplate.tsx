import { ContactUsModule } from "~/components/Modules/Contact/ContactUsModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import { FooterModule } from "~/components/Modules/Footer/FooterModule";

type Props = {
  contactHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  contactContentModuleProps: React.ComponentProps<typeof ContactUsModule>;
  conatctFooterModuleProps: React.ComponentProps<typeof FooterModule>;
};

export const ContactTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", overflowX: "hidden" }}>
      <Header className='header relative flex h-20 w-full items-center px-8'>
        <HeaderModule {...props.contactHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "hidden" }}>
        <ContactUsModule {...props.contactContentModuleProps} />
      </Content>

      <Footer className='footer px-8 py-16'>
        <FooterModule {...props.conatctFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
