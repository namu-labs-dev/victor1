import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import { GlobalClientComponent } from "~/components/Components/GlobalClientComponent/GlobalClientComponent";

type Props = {
  clientTitle: string;
  clients: React.ComponentProps<typeof GlobalClientComponent>;
};

export const GlobalClientModule = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-16 bg-black p-8 py-10 lg:py-20'>
      <div className='w-full'>
        <AnimatedComponent direction='top'>
          <div className='text-center text-2xl font-bold text-white'>
            {props.clientTitle}
          </div>
        </AnimatedComponent>
      </div>

      <div className='w-full'>
        <AnimatedComponent direction='bottom'>
          <div className='flex w-full flex-wrap justify-between gap-10'>
            <GlobalClientComponent {...props.clients} />
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};
