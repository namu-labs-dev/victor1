import { RatingAtom } from "../RatingAtom/RatingAtom";

type Props = {
  id: number;
  desc: string;
  author: string;
  role: string;
  star: React.ComponentProps<typeof RatingAtom>[];
};

export const ClientSayAtom = (props: Props) => {
  return (
    <div className='flex w-full min-w-full flex-col gap-6 bg-cover bg-center'>
      <div className='flex gap-2'>
        {props.star.map((item, index) => (
          <RatingAtom key={index} />
        ))}
      </div>

      <div className='info-text testimony-text'>{props.desc}</div>

      <div className='horizontal-line'>
        <div className='quote-icon-contain'></div>
      </div>

      <div className='flex flex-col'>
        <div className='info-text author-name'>{props.author}</div>
        <div className='desc-text author-role'>{props.role}</div>
      </div>
    </div>
  );
};
