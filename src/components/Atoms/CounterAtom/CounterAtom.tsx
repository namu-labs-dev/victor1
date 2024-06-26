import { CheckCircleOutlined } from "@ant-design/icons";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { COLORS } from "~/constants/colors";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  id: number;
  title: string;
  no: string;
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
      const stepTime = Math.abs(Math.floor(duration / parseInt(props.no)));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= parseInt(props.no)) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [inView, props.no]);

  return (
    <div className='counter-container mt-6 flex w-[100px] flex-col justify-between gap-4 sm:mt-0 sm:w-[150px] md:w-[220px] lg:w-[200px]'>
      <CheckCircleOutlined
        style={{ color: COLORS.primary }}
        className='text-2xl'
      />

      <div
        ref={ref}
        className={`${inter.className} counter-number p-0 text-5xl font-black text-transparent sm:text-7xl md:text-9xl`}
        style={{ width: `${props.no.length + 1}ch` }}
      >
        {props.title === "Project’s Complete" ? `${count}K` : count}
      </div>

      <div className='text-[14px] text-[#aaa] sm:text-[18px]'>{props.title}</div>
    </div>
  );
};
