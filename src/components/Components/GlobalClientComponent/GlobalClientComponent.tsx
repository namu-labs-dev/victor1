import { GlobalClientAtom } from "~/components/Atoms/GlobalClientAtom/GlobalClientAtom";

type Props = React.ComponentProps<typeof GlobalClientAtom>[];

export const GlobalClientComponent = (props: Props) => {
  const clients = Object.values(props);

  return (
    <>
      {clients.map((item) => (
        <GlobalClientAtom key={item.id} {...item} />
      ))}
    </>
  );
};
