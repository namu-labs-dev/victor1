import { SolutionAtom } from "~/components/Atoms/SolutionAtom/SolutionAtom";

type Solutions = {
  id: number;
  title: string;
  desc: string;
  url: string;
};

type Props = {
  solutions: Solutions[];
};

export const SolutionComponent = (props: Props) => {
  return (
    <>
      {props.solutions.map((item) => (
        <SolutionAtom key={item.id} item={item} />
      ))}
    </>
  );
};
