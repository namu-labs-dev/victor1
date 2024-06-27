import { CheckOutlined } from "@ant-design/icons";

type Props = {
  id: number;
  title: string;
  desc: string;
};

export const ChooseUsAtom = (props: Props) => {
  return (
    <div className='flex gap-6'>
      <div className='flex flex-col items-center gap-4'>
        <div className='choice-check-container'>
          <CheckOutlined className='choice-check-icon text-lg' />
        </div>

        <div className='choice-line-container'></div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='info-text choice-info-text'>{props.title}</div>
        <div className='desc-text'>{props.desc}</div>
      </div>
    </div>
  );
};
