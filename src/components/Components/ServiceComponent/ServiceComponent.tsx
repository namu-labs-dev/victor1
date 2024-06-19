import { ServiceAtom } from "~/components/Atoms/ServiceAtom/ServiceAtom";

type Services = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  url: string;
};

type Props = {
  services: Services[];
};

export const ServiceComponent = (props: Props) => {
  return (
    <>
      {props.services.map((item) => (
        <ServiceAtom key={item.id} item={item} />
      ))}
    </>
  );
};
