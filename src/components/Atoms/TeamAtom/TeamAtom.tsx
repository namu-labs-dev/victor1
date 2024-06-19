import {
  ArrowUpOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  item: {
    id: number;
    img: string;
    name: string;
    role: string;
    url: string;
  };
};

export const TeamAtom = (props: Props) => {
  return (
    <div className="team-container relative flex flex-col gap-6">
      <Image src={props.item.img} alt="member1" height={300} width={250} />

      <div className="name-container flex w-full items-center justify-between">
        <div className="info-text member-name w-1/2">{props.item.name}</div>

        <ArrowUpOutlined
          className="member-arrow-link cursor-pointer text-2xl text-white"
          rotate={45}
        />
      </div>

      <div className="desc-text">{props.item.role}</div>

      <div className="detail-container absolute bottom-0 flex flex-col gap-4">
        <div className="flex w-full gap-2">
          <Link href={props.item.url} className="info-text view-details">
            View Details
          </Link>

          <ArrowUpOutlined
            className="member-arrow-link cursor-pointer text-lg"
            rotate={45}
          />
        </div>

        <div className="flex gap-3">
          <Link href={props.item.url} className="social-icon">
            <FacebookOutlined className="text-lg" />
          </Link>

          <Link href={props.item.url} className="social-icon">
            <TwitterOutlined className="text-lg" />
          </Link>

          <Link href={props.item.url} className="social-icon">
            <InstagramOutlined className="text-lg" />
          </Link>

          <Link href={props.item.url} className="social-icon">
            <LinkedinOutlined className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};
