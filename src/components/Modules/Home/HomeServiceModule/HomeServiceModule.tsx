import "./custom.css";
import Marquee from "react-fast-marquee";
import { Inter } from "next/font/google";
import { ServiceComponent } from "~/components/Components/ServiceComponent/ServiceComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Services = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  url: string;
};

type Props = {
  serviceInfo: string;
  serviceTitle: string;
  services: Services[];
};

export const HomeServiceModule = (props: Props) => {
  return (
    <div className="service flex w-full flex-col items-center gap-6 bg-black p-8 pt-16">
      <div className="info-text service-info-text">{props.serviceInfo}</div>
      <div className="title-text service-title-text text-center sm:w-full lg:w-2/4">
        {props.serviceTitle}
      </div>

      <div className="mt-8 w-full gap-4 sm:flex sm:flex-col lg:flex lg:flex-row">
        <ServiceComponent services={props.services} />
      </div>

      <Marquee speed={200} className="mt-8 overflow-hidden">
        <div className="z-10 flex gap-10 px-8 py-0" style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} design service-design-text font-black text-transparent`}
          >
            DIGITAL
          </div>
          <div
            className={`${inter.variable} service-design-text font-black text-white`}
          >
            SOLUTION
          </div>
        </div>
      </Marquee>
    </div>
  );
};
