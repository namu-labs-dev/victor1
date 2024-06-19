import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import "./custom.css";
import { PricingComponent } from "~/components/Components/PricingComponent/PricingComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Packages = {
  id: number;
  title: string;
  desc: string;
  price: string;
  url: string;
};

type Props = {
  pricingInfo: string;
  pricingTitle: string;
  firstCardInfo: string;
  firstCardTitle: string;
  packages: Packages[];
};

export const HomePricingModule = (props: Props) => {
  return (
    <div className="bg-black py-14">
      <Marquee speed={200} className="overflow-hidden">
        <div className="z-10 flex gap-10 px-8 py-0" style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} font-black text-white`}
            style={{ fontSize: "11em" }}
          >
            PRICING
          </div>
          <div
            className={`${inter.variable} design font-black text-transparent`}
            style={{ fontSize: "11em" }}
          >
            PACKAGE
          </div>
        </div>
      </Marquee>

      <div className="flex flex-col items-center justify-center gap-6 p-8">
        <div className="info-text">{props.pricingInfo}</div>
        <div className="title-text">{props.pricingTitle}</div>

        <PricingComponent
          packages={props.packages}
          firstCardInfo={props.firstCardInfo}
          firstCardTitle={props.firstCardTitle}
        />
      </div>
    </div>
  );
};
