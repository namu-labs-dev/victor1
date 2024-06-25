import { WhoWeAreServiceAtom } from "~/components/Atoms/WhoWeAreServiceAtom/WhoWeAreServiceAtom";

type Props = React.ComponentProps<typeof WhoWeAreServiceAtom>[];

export const WhoWeAreServiceComponent = (props: Props) => {
  const services = Object.values(props);

  return (
    <>
      {services.map((item) => (
        <WhoWeAreServiceAtom key={item.id} {...item} />
      ))}
    </>
  );
};
