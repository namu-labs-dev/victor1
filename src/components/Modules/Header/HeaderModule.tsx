import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import { HeaderComponent } from "~/components/Components/HeaderComponent/HeaderComponent";
import "./custom.css";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { useEffect, useState } from "react";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderComponent>;
};

export const HeaderModule = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-container relative flex w-full items-center justify-between ${isSticky ? "sticky" : ""}`}
    >
      <LogoAtom width={150} height={100} />

      {menuOpen && (
        <div className='absolute top-20 z-50 hidden h-auto w-full flex-col bg-neutral-800 p-6 py-2 max-920:flex'>
          <HeaderComponent {...props.headerProps} />
        </div>
      )}

      <div className='flex items-center gap-6 text-white'>
        <div className='flex items-center gap-6 max-920:hidden'>
          <HeaderComponent {...props.headerProps} />
        </div>

        <MenuOutlined
          className='hidden cursor-pointer text-lg text-white max-920:flex'
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <SearchOutlined className='hidden cursor-pointer text-lg text-white sm:block' />

        <div className='util-icon-container'>
          <SVGAtom iconName='toggler' color='white' width={24} height={24} />
        </div>
      </div>
    </div>
  );
};
