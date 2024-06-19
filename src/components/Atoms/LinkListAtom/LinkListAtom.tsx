import Link from "next/link";

type Props = {
  item: {
    id: number;
    to: string;
    title: string;
  };
};

export const LinkListAtom = (props: Props) => {
  return (
    <Link href={props.item.to} className="transformLink">
      {props.item.title}
    </Link>
  );
};
