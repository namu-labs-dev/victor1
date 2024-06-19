import "./custom.css";
import { CounterComponent } from "~/components/Components/CounterComponent/CounterComponent";

type Counter = {
  id: number;
  title: string;
  no: string;
};

type Props = {
  counter: Counter[];
};

export const CounterModule = (props: Props) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between bg-black p-8 pb-16 gap-4">
      <CounterComponent counter={props.counter} />
    </div>
  );
};
