import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    id: number;
    title: string;
    img: string;
    url: string;
  };
};

export const RecentWorkAtom = (props: Props) => {
  return (
    <div className="project-container flex w-full items-center justify-between py-14">
      <div className="flex w-1/3 flex-col gap-8">
        <div className="title-text" style={{ fontWeight: "normal" }}>
          0{props.item.id}
        </div>
        <Link
          href="/"
          className="info-text"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          {props.item.title}
        </Link>
      </div>

      <div className="flex w-1/3 justify-center">
        <Image
          src={props.item.img}
          alt="project-timeline"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="arrow-container flex w-1/3 justify-end">
        <Link
          href={props.item.url}
          className="flex h-full w-full items-center justify-center"
        >
          <ArrowUpOutlined
            className="arrow-link cursor-pointer text-2xl text-white"
            rotate={45}
          />
        </Link>
      </div>
    </div>
  );
};
