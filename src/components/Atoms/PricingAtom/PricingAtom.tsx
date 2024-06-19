import { CheckCircleOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import { COLORS } from "~/constants/colors";
import SVGAtom from "../SVGAtom/SVGAtom";
import Image from "next/image";

type Props = {
  item: { id: number; title: string; desc: string; price: string; url: string };
};

export const PricingAtom = (props: Props) => {
  return (
    <div className="pricing-card flex flex-col gap-6 lg:w-1/3">
      <div className="flex items-center gap-6">
        <div className="icon-container flex items-center justify-between rounded-full">
          <SVGAtom
            iconName="price"
            height={30}
            width={20}
            color="rgb(10, 16, 25)"
          />
        </div>

        <div className="info-text package-title">{props.item.title}</div>
      </div>

      <div className="desc-text">{props.item.desc}</div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">Landing Page Design</div>
      </div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">Web Development</div>
      </div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">SEO Optimizations</div>
      </div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">Mobile Applications Design</div>
      </div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">Quality Assurance</div>
      </div>

      <div className="flex items-center gap-6">
        <CheckCircleOutlined
          style={{ color: COLORS.primary }}
          className="text-2xl"
        />

        <div className="desc-text plan-det">Customs Services</div>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="title-text">
          <span>$</span>
          {props.item.price}
        </div>

        <Image src="/pngs/right-arrow.png" alt="" width={100} height={20} />

        <div className="desc-text plan-det">
          Save <br /> 15%
        </div>
      </div>

      <Link
        href={props.item.url}
        className="button mt-6 flex items-center justify-center gap-2 p-4"
      >
        <div className="info-text btn-text">Choose Package</div>

        <ArrowUpOutlined
          className="arrow-button-link cursor-pointer text-lg text-white"
          rotate={45}
        />
      </Link>
    </div>
  );
};
