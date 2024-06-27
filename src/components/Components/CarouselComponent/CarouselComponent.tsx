import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  useState,
  useEffect,
  type ReactNode,
  useRef,
  type PropsWithChildren,
} from "react";

type Props = {
  slides: object[];
  children: ReactNode;
};

export const CarouselComponent = (props: PropsWithChildren<Props>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);

      // setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [props.slides.length]);

  useEffect(() => {
    if (currentIndex === props.slides.length) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(props.slides.length - 1);
      }, 500);
    }
  }, [currentIndex, props.slides.length]);

  const handleNext = () => {
    setTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (props.slides.length + 1));
  };

  const handlePrev = () => {
    setTransitioning(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.slides.length) % (props.slides.length + 1)
    );
  };

  return (
    <div className='relative w-full overflow-hidden'>
      <div
        ref={slidesRef}
        className={`flex ${transitioning ? "transition-transform duration-500" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {props.children}
      </div>

      <div className='mt-10 flex w-full items-center gap-6'>
        <ArrowUpOutlined
          className='testimony-arrow-icon cursor-pointer text-2xl text-white duration-500 ease-in-out hover:text-primary-color'
          rotate={45}
          onClick={handlePrev}
        />

        {props.slides.map((item, index) => (
          <div
            className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-primary-color" : "bg-gray-opacity"}`}
            key={index}
          ></div>
        ))}

        <ArrowDownOutlined
          className='testimony-arrow-icon cursor-pointer text-2xl text-white duration-500 ease-in-out hover:text-primary-color'
          rotate={45}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
