import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Links = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  links: Links[];
};

export const HeaderComponent = (props: Props) => {
  return (
    <>
      {props.links.map((item) => (
        <HeaderAtom key={item.id} item={item} />
      ))}
    </>
  );
};
