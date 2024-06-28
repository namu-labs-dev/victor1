import React from "react";
import { ServiceStepAtom } from "~/components/Atoms/ServiceStepAtom/ServiceStepAtom";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

type Props = {
  serviceSteps: React.ComponentProps<typeof ServiceStepAtom>[];
};

export const ServiceStepModule = (props: Props) => {
  return (
    <div className='w-full bg-black pt-20'>
      <AnimatedComponent direction='top'>
        <div className='flex flex-wrap justify-center gap-6 px-8 py-36'>
          {props.serviceSteps.map((item) => (
            <ServiceStepAtom key={item.id} {...item} />
          ))}
        </div>
      </AnimatedComponent>
    </div>
  );
};
