import { SolutionAtom } from "~/components/Atoms/SolutionAtom/SolutionAtom";

type Props = React.ComponentProps<typeof SolutionAtom>[];

export const SolutionComponent = (props: Props) => {
  const solutions = Object.values(props);

  return (
    <>
      {solutions.map((item) => (
        <SolutionAtom key={item.id} {...item} />
      ))}
    </>
  );
};
