import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {
  item: { id: number; title: string; desc: string; url: string };
};

export const SolutionAtom = (props: Props) => {
  return (
    <div className="solution-container mt-10 gap-28 sm:w-full sm:flex-col lg:flex lg:w-4/5 lg:flex-row">
      <div>
        <div className="number-container flex h-10 w-10 items-center justify-center rounded-full p-2">
          <div className="desc-text text-lg text-gray-300">
            0{props.item.id}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="info-text solution-title text-white">
          {props.item.title}
        </div>

        <div className="desc-text text-lg text-gray-300">{props.item.desc}</div>

        <div className="wrapper flex items-center">
          <Link href={props.item.url} className="info-text solution-link">
            Read More
          </Link>

          <ArrowUpOutlined
            className="solution-arrow-link cursor-pointer text-2xl text-white"
            rotate={45}
          />
        </div>
      </div>
    </div>
  );
};
