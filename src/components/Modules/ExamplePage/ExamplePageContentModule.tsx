type Props = {
  title: string;
};

export const ExamplePageContentModule = (props: Props) => {
  return <div>{props.title}</div>;
};
