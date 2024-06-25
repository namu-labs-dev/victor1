import { GlobalClientAtom } from "~/components/Atoms/GlobalClientAtom/GlobalClientAtom";

type Clients = {
  id: number;
  img: string;
};

type Props = {
  clients: Clients[];
};

export const GlobalClientComponent = (props: Props) => {
  return (<>
  {props.clients.map(item=>(
    <GlobalClientAtom key={item.id} item={item} />
  ))}
  </>);
};