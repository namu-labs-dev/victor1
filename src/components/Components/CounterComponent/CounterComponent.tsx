import { CounterAtom } from "~/components/Atoms/CounterAtom/CounterAtom";

type Counter = {
  id: number;
  title: string;
  no: string;
};

type Props = {
  counter: Counter[];
};

export const CounterComponent = (props: Props) => {
  return (
    <>
      {props.counter.map((item) => (
        <CounterAtom key={item.id} item={item} />
      ))}
    </>
  );
};
