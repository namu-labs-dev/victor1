import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import "./custom.css";
import Image from "next/image";
import { ClientSayComponent } from "~/components/Components/ClientSayComponent/ClientSayComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Testimonies = {
  id: number;
  desc: string;
  author: string;
  role: string;
};

type Props = {
  testimonies: Testimonies[];
};

export const ClientSayModule = (props: Props) => {
  return (
    <div className="bg-black py-8 pt-20">
      <Marquee speed={200} className="overflow-hidden">
        <div className="z-10 flex gap-10 px-8 py-0" style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} design solution-design-text font-black text-transparent`}
          >
            CLIENTS
          </div>
          <div
            className={`${inter.variable} solution-design-text font-black text-white`}
          >
            {"SAY'S"}
          </div>
        </div>
      </Marquee>

      <div className="flex gap-8 p-8 max-768:flex-col">
        <ClientSayComponent testimonies={props.testimonies} />

        <div className="relative h-auto w-1/2 max-768:h-96 max-768:w-full">
          <Image
            fill
            src="/jpgs/testimonials-three.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
