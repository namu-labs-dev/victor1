import { CheckCircleOutlined } from "@ant-design/icons";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { COLORS } from "~/constants/colors";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  item: { id: number; title: string; no: string };
};

export const CounterAtom = (props: Props) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the counter always when in view
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // Duration of the counter animation in milliseconds
      const stepTime = Math.abs(Math.floor(duration / parseInt(props.item.no)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= parseInt(props.item.no)) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, props.item.no]);

  return (
    <div className='counter-container mt-6 flex flex-col gap-4 sm:mt-0'>
      <CheckCircleOutlined
        style={{ color: COLORS.primary }}
        className='text-2xl'
      />

      <div
        ref={ref}
        className={`${inter.className} counter-number text-6xl font-black text-transparent sm:text-7xl md:text-9xl`}
      >
        {props.item.title === "Project’s Complete" ? `${count}K` : count}
      </div>

      <div className='desc-text max-480:w-3/4'>{props.item.title}</div>
    </div>
  );
};
