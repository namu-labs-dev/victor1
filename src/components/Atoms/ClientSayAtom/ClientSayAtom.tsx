import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  StarFilled,
} from "@ant-design/icons";

type Props = {
  item: { id: number; desc: string; author: string; role: string };
};

export const ClientSayAtom = (props: Props) => {
  return (
    <div className="flex w-1/2 flex-col gap-6 max-768:w-full">
      <div className="flex gap-2">
        <StarFilled className="star-icon text-2xl" />
        <StarFilled className="star-icon text-2xl" />
      </div>

      <div className="info-text testimony-text">{props.item.desc}</div>

      <div className="horizontal-line">
        <div className="quote-icon-contain"></div>
      </div>

      <div className="flex flex-col">
        <div className="info-text author-name">{props.item.author}</div>
        <div className="desc-text author-role">{props.item.role}</div>
      </div>

      <div className="mt-10 flex w-full items-center gap-6">
        <ArrowUpOutlined
          className="testimony-arrow-icon cursor-pointer text-2xl text-white"
          rotate={45}
        />

        <div className="h-2 w-2 rounded-full bg-teal-500"></div>

        <ArrowDownOutlined
          className="testimony-arrow-icon cursor-pointer text-2xl text-white"
          rotate={45}
        />
      </div>
    </div>
  );
};
