import Link from "next/link";

type DropDown = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  id: number;
  title: string;
  url: string;
  dropdown: DropDown[];
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className='link-container relative'>
      <div className='flex gap-2'>
        <Link href={props.url} className='info-text navLinks'>
          {props.title}
        </Link>

        {props.dropdown.length > 0 && (
          <div className='cursor-pointer text-[1.15rem] font-bold text-white'>
            +
          </div>
        )}
      </div>

      <div className='dropdown-container absolute flex h-auto w-[250px] flex-col bg-[#252525] max-920:relative'>
        {props.dropdown.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className='w-full border-b-[1px] border-b-[#aaa] px-6 text-[1rem] font-bold text-white duration-100 ease-in hover:text-primary-color hover:underline'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
