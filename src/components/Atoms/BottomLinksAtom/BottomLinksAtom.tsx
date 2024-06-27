type Props = {
  id: number;
  title: string;
  url: string;
};

export const BottomLinksAtom = (props: Props[]) => {
  const bottomLinks = Object.values(props);

  return (
    <ul className='flex gap-6 lg:gap-10'>
      {bottomLinks.map((item) => (
        <li
          className='cursor-pointer text-sm text-white duration-500 ease-in hover:text-primary-color lg:text-lg'
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
