type Props = {
  item: { id: number; title: string; url: string };
};

export const BottomLinksAtom = (props: Props) => {
  return <li className='cursor-pointer'>{props.item.title}</li>;
};
