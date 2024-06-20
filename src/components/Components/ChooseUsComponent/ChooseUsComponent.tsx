import { ChooseUsAtom } from "~/components/Atoms/ChooseUsAtom/ChooseUsAtom";

type Choices = {
  id: number;
  title: string;
  desc: string;
};

type Props = {
  choices: Choices[];
};

export const ChooseUsComponent = (props: Props) => {
  return <>
  {props.choices.map(item=>(
    <ChooseUsAtom key={item.id} item={item} />
  ))}
  </>;
};
