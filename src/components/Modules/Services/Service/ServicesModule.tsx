import "./custom.css";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import { ServicesAtom } from "~/components/Atoms/ServicesAtom/ServicesAtom";

type Props = {
  services: React.ComponentProps<typeof ServicesAtom>[];
};

export const ServicesModule = (props: Props) => {
  return (
    <AnimatedComponent direction='bottom'>
      <div className='flex w-full flex-col gap-8 bg-black px-8 py-20 md:flex-row md:flex-wrap'>
        {props.services.map((item) => (
          <ServicesAtom key={item.id} {...item} />
        ))}
      </div>
    </AnimatedComponent>
  );
};
