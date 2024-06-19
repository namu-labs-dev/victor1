import { ExamplePageHeaderModule } from "~/components/Modules/ExamplePage/ExamplePageHeaderModule";
import { ExamplePageContentModule } from "~/components/Modules/ExamplePage/ExamplePageContentModule";
import { ExamplePageFooterModule } from "~/components/Modules/ExamplePage/ExamplePageFooterModule";
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  examplePageHeaderModuleProps: React.ComponentProps<typeof ExamplePageHeaderModule>;
  examplePageContentModuleProps: React.ComponentProps<typeof ExamplePageContentModule>;
  examplePageFooterModuleProps: React.ComponentProps<typeof ExamplePageFooterModule>;
};

export const ExamplePageTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
    {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

    <Content style={{ overflow: "auto" }}>
           <ExamplePageHeaderModule {...props.examplePageHeaderModuleProps}  />
     <ExamplePageContentModule {...props.examplePageContentModuleProps}  />
     <ExamplePageFooterModule {...props.examplePageFooterModuleProps}  />
    </Content>

    {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
  </Layout>
  );
};
  