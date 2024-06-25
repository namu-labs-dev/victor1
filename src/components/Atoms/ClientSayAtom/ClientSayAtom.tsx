import { StarFilled } from "@ant-design/icons";

type Props = {
  item: {
    id: number;
    desc: string;
    author: string;
    role: string;
    star: string[];
  };
  index: number;
};

export const ClientSayAtom = (props: Props) => {
  return (
    <div className='flex w-full min-w-full flex-col gap-6 bg-cover bg-center'>
      <div className='flex gap-2'>
        {props.item.star.map((item, index) => (
          <StarFilled className='star-icon text-2xl' key={index} />
        ))}
      </div>

      <div className='info-text testimony-text'>{props.item.desc}</div>

      <div className='horizontal-line'>
        <div className='quote-icon-contain'></div>
      </div>

      <div className='flex flex-col'>
        <div className='info-text author-name'>{props.item.author}</div>
        <div className='desc-text author-role'>{props.item.role}</div>
      </div>
    </div>
  );
};
