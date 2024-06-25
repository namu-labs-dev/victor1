import { CounterAtom } from "~/components/Atoms/CounterAtom/CounterAtom";

type Props = React.ComponentProps<typeof CounterAtom>[];

export const CounterComponent = (props: Props) => {
  const counter = Object.values(props);

  return (
    <>
      {counter.map((item) => (
        <CounterAtom key={item.id} {...item} />
      ))}
    </>
  );
};
