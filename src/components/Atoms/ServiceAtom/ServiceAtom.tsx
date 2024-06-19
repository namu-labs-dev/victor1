import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  item: { id: number; title: string; desc: string; icon: any; url: string };
};

export const ServiceAtom = (props: Props) => {
  return (
    <div className="service-card flex flex-col gap-8 p-6">
      <div className="flex w-full justify-between">
        <div
          className="info-text service-title cursor-pointer"
          style={{ color: "white", width: "50%" }}
        >
          {props.item.title}
        </div>

        <SVGAtom iconName={props.item.icon} height={100} width={60} />
      </div>

      <div className="desc-text">{props.item.desc}</div>

      <div className="wrapper flex items-center">
        <Link href={props.item.url} className="info-text service-link">
          Read More
        </Link>

        <ArrowUpOutlined
          className="service-arrow-link cursor-pointer text-2xl text-white"
          rotate={45}
        />
      </div>
    </div>
  );
};
