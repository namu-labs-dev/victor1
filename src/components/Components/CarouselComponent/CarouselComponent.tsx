import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useState, useEffect, type ReactNode } from "react";

type Props = {
  slides: object[];
  children: ReactNode;
};

export const CarouselComponent = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [props.slides.length]);

  // console.log(currentIndex);

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        className='flex transition-transform duration-500'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {props.children}
      </div>

      <div className='mt-10 flex w-full items-center gap-6'>
        <ArrowUpOutlined
          className='testimony-arrow-icon hover:text-primary-color cursor-pointer text-2xl text-white duration-500 ease-in-out'
          rotate={45}
        />

        {props.slides.map((item, index) => (
          <div
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-primary-color" : "bg-gray-opacity"}`}
            key={index}
          ></div>
        ))}

        <ArrowDownOutlined
          className='testimony-arrow-icon hover:text-primary-color cursor-pointer text-2xl text-white duration-500 ease-in-out'
          rotate={45}
        />
      </div>
    </div>
  );
};
