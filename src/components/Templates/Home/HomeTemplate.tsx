import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { HeaderModule } from "~/components/Modules/Header/HeaderModule";
import './custom.css'

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header className="flex h-20 w-full items-center px-8 header">
        <HeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }} className="">
        <HomeContentModule {...props.homeContentModuleProps} />
      </Content>

      {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
    </Layout>
  );
};
