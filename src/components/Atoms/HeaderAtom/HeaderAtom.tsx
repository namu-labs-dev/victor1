import Link from "next/link";

type Props = {
  id: number;
  title: string;
  url: string;
};

export const HeaderAtom = (props: Props) => {
  return (
    <Link href={props.url} className='info-text navLinks'>
      {props.title}
    </Link>
  );
};
