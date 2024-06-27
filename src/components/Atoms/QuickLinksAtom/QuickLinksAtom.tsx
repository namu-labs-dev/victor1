type Props = {
  id: number;
  title: string;
  url: string;
};

export const QuickLinksAtom = (props: Props[]) => {
  const quickLinks = Object.values(props);

  return (
    <ul className='mt-0 flex flex-col gap-4 lg:mt-8'>
      {quickLinks.map((item) => (
        <li
          className='cursor-pointer text-lg text-[#aaa] duration-500 ease-in hover:text-primary-color hover:underline'
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
