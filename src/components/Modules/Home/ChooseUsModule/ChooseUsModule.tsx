import Image from "next/image";
import "./custom.css";
import { ChooseUsComponent } from "~/components/Components/ChooseUsComponent/ChooseUsComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

type Choices = {
  id: number;
  title: string;
  desc: string;
};

type Props = {
  chooseInfo: string;
  chooseTitle: string;
  choices: Choices[];
};

export const ChooseUsModule = (props: Props) => {
  return (
    <div className='w-full bg-black py-16'>
      <AnimatedComponent direction='bottom'>
        <div className='flex h-auto gap-6 bg-black p-8 max-768:flex-col'>
          <div className='relative h-auto w-3/5 max-768:h-60 max-768:w-full'>
            <Image
              src='/jpgs/why-choose-left.jpg'
              alt=''
              fill
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex w-2/5 flex-col gap-4 max-768:w-full'>
            <div className='info-text choose-info-text'>{props.chooseInfo}</div>
            <div className='title-text choose-title-text'>
              {props.chooseTitle}
            </div>

            <div className='mt-8'>
              <div className='flex flex-col gap-6 max-768:items-center'>
                <ChooseUsComponent choices={props.choices} />
              </div>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};
