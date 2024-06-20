import { ClientSayAtom } from "~/components/Atoms/ClientSayAtom/ClientSayAtom";

type Testimonies = {
  id: number;
  desc: string;
  author: string;
  role: string;
};

type Props = {
  testimonies: Testimonies[];
};

export const ClientSayComponent = (props: Props) => {
  return (
    <>
      {props.testimonies.map((item) => (
        <ClientSayAtom key={item.id} item={item} />
      ))}
    </>
  );
};
