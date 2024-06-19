import { ExamplePageTemplate } from "~/components/Templates/ExamplePage/ExamplePageTemplate";

export const ExamplePageContainer = () => {
  const examplepageTemplateProps: React.ComponentProps<
    typeof ExamplePageTemplate
  > = {
    examplePageHeaderModuleProps: { title: "ExamplePageHeaderModule" },
    examplePageContentModuleProps: { title: "ExamplePageContentModule" },
    examplePageFooterModuleProps: { title: "ExamplePageFooterModule" },
  };

  return <ExamplePageTemplate {...examplepageTemplateProps} />;
};
