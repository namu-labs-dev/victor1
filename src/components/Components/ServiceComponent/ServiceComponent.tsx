import { ServiceAtom } from "~/components/Atoms/ServiceAtom/ServiceAtom";

type Props = React.ComponentProps<typeof ServiceAtom>[];

export const ServiceComponent = (props: Props) => {
  const services = Object.values(props);

  return (
    <>
      {services.map((item) => (
        <ServiceAtom key={item.id} {...item} />
      ))}
    </>
  );
};
