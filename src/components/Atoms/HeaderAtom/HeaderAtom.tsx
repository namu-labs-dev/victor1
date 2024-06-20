import Link from "next/link";

type Props = {
  item: {
    id: number;
    title: string;
    url: string;
  };
};

export const HeaderAtom = (props: Props) => {
  return <Link href={props.item.url} className="info-text navLinks">{props.item.title}</Link>;
};
