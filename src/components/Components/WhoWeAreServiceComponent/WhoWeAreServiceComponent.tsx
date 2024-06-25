import { WhoWeAreServiceAtom } from "~/components/Atoms/WhoWeAreServiceAtom/WhoWeAreServiceAtom";

type Services = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

type Props = {
  services: Services[];
};

export const WhoWeAreServiceComponent = (props: Props) => {
  return <>
  {props.services.map(item=> (
    <WhoWeAreServiceAtom key={item.id} item={item} />
  ))}
  </>;
};
