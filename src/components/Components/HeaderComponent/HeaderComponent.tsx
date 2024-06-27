import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  links: React.ComponentProps<typeof HeaderAtom>[];
};

export const HeaderComponent = (props: Props) => {
  return (
    <>
      {props.links.map((item) => (
        <HeaderAtom key={item.id} {...item} />
      ))}
    </>
  );
};
