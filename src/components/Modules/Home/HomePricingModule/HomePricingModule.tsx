import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";
import "./custom.css";
import { PricingComponent } from "~/components/Components/PricingComponent/PricingComponent";
import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import { ArrowUpOutlined } from "@ant-design/icons";
import Link from "next/link";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

type Props = {
  pricingInfo: string;
  pricingTitle: string;
  firstCardInfo: string;
  firstCardTitle: string;
  packages: React.ComponentProps<typeof PricingComponent>;
};

export const HomePricingModule = (props: Props) => {
  return (
    <div className='bg-black p-8 py-16'>
      <Marquee speed={200} className='overflow-hidden'>
        <div className='z-10 flex gap-10 px-8 py-0' style={{ lineHeight: 0.9 }}>
          <div
            className={`${inter.variable} pricing-design-text font-black text-white`}
          >
            PRICING
          </div>
          <div
            className={`${inter.variable} design pricing-design-text font-black text-transparent`}
          >
            PACKAGE
          </div>
        </div>
      </Marquee>

      <div className='mt-20 flex flex-col items-center justify-center gap-10'>
        <AnimatedComponent direction='top'>
          <div className='flex w-full flex-col items-center gap-6'>
            <div className='info-text pricing-info-text'>
              {props.pricingInfo}
            </div>
            <div className='title-text pricing-title-text w-full text-center md:w-[70%]'>
              {props.pricingTitle}
            </div>
          </div>
        </AnimatedComponent>

        <AnimatedComponent direction='bottom'>
          <div className='flex w-full justify-between gap-6 max-768:flex-col'>
            <div className='pricing-card lg:w-1/3'>
              <div className='info-text join-text'>{props.firstCardInfo}</div>
              <div className='info-text'>{props.firstCardTitle}</div>

              <div className='flex w-full items-center justify-between '>
                <div className='arrow-container flex items-center justify-center'>
                  <Link
                    href='/'
                    className='flex h-full w-full items-center justify-center'
                  >
                    <ArrowUpOutlined
                      className='arrow-link cursor-pointer text-2xl text-white'
                      rotate={45}
                    />
                  </Link>
                </div>

                <SVGAtom
                  iconName='pricing_hand'
                  color='white'
                  height={110}
                  width={100}
                />
              </div>
            </div>

            <PricingComponent {...props.packages} />
          </div>
        </AnimatedComponent>
      </div>
    </div>
  );
};
