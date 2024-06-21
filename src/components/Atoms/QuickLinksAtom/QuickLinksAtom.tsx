type Props = {
  item: { id: number; title: string; url: string };
};

export const QuickLinksAtom = (props: Props) => {
  return <li className='cursor-pointer'>{props.item.title}</li>;
};
