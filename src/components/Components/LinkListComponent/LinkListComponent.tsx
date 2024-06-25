import { LinkListAtom } from "~/components/Atoms/LinkListAtom/LinkListAtom";

type Props = React.ComponentProps<typeof LinkListAtom>[];

export const LinkListComponent = (props: Props) => {
  const navLinks = Object.values(props);

  return (
    <>
      {navLinks.map((item) => (
        <LinkListAtom key={item.id} {...item} />
      ))}
    </>
  );
};
