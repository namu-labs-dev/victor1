import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import { PricingAtom } from "~/components/Atoms/PricingAtom/PricingAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Packages = {
  id: number;
  title: string;
  desc: string;
  price: string;
  url: string;
};

type Props = {
  firstCardInfo: string;
  firstCardTitle: string;
  packages: Packages[];
};

export const PricingComponent = (props: Props) => {
  return (
    <div className="flex w-full justify-between gap-6">
      <div className="pricing-card w-1/3">
        <div className="info-text join-text">{props.firstCardInfo}</div>
        <div className="info-text">{props.firstCardTitle}</div>

        <div className="flex w-full items-center justify-between ">
          <div className="arrow-container flex items-center justify-center">
            <Link
              href="/"
              className="flex h-full w-full items-center justify-center"
            >
              <ArrowUpOutlined
                className="arrow-link cursor-pointer text-2xl text-white"
                rotate={45}
              />
            </Link>
          </div>

          <SVGAtom
            iconName="pricing_hand"
            color="white"
            height={110}
            width={100}
          />
        </div>
      </div>

      {props.packages.map((item) => (
        <PricingAtom key={item.id} item={item} />
      ))}
    </div>
  );
};
