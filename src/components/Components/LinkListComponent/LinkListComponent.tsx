import { LinkListAtom } from "~/components/Atoms/LinkListAtom/LinkListAtom";

type NavLinks = {
  id: number;
  to: string;
  title: string;
};

type Props = {
  navLinks: NavLinks[];
};

export const LinkListComponent = (props: Props) => {
  return (
    <>
      {props.navLinks.map((item) => (
        <LinkListAtom key={item.id} item={item} />
      ))}
    </>
  );
};
