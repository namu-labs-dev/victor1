import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
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
    <div className='bg-black p-8'>
      <AnimatedComponent direction='right'>
        <div className='flex w-full flex-wrap items-center justify-between gap-4 bg-black pb-16'>
          <CounterComponent counter={props.counter} />
        </div>
      </AnimatedComponent>
    </div>
  );
};
