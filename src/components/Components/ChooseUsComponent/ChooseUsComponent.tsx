import { ChooseUsAtom } from "~/components/Atoms/ChooseUsAtom/ChooseUsAtom";

type Props = React.ComponentProps<typeof ChooseUsAtom>[];

export const ChooseUsComponent = (props: Props) => {
  const choices = Object.values(props);
  return (
    <>
      {choices.map((item) => (
        <ChooseUsAtom key={item.id} {...item} />
      ))}
    </>
  );
};
