import Link from "next/link";
import "./custom.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import { RecentWorkComponent } from "~/components/Components/RecentWorkComponent/RecentWorkComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";

type RecentWorks = {
  id: number;
  title: string;
  img: string;
  url: string;
};

type Props = {
  recentInfo: string;
  recentTitle: string;
  url: string;
  recentWorks: RecentWorks[];
};

export const RecentWorkModule = (props: Props) => {
  return (
    <div className='bg-black w-full py-16'>
      <AnimatedComponent>
        <div className='flex w-full flex-col gap-16 bg-black p-8'>
          <div className='w-full items-center justify-between lg:flex'>
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <div className='info-text recent-info-text'>
                {props.recentInfo}
              </div>
              <div className='title-text recent-title-text'>
                {props.recentTitle}
              </div>
            </div>

            <div className='flex lg:w-1/2 lg:justify-end'>
              <div className='more-projects flex lg:items-center lg:justify-center'>
                <Link
                  href={props.url}
                  className='info-text more-project-text flex h-full w-full items-center justify-center gap-4 text-center'
                  style={{ color: "white" }}
                >
                  <div className='more'>View More Projects</div>

                  <ArrowUpOutlined
                    className='more-arrow-link cursor-pointer text-2xl text-white'
                    rotate={45}
                  />
                </Link>
              </div>
            </div>
          </div>

          <RecentWorkComponent recentWorks={props.recentWorks} />
        </div>
      </AnimatedComponent>
    </div>
  );
};
