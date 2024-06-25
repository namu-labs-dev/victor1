import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import { BottomLinksComponent } from "./BottomLinksComponent/BottomLinksComponent";
import { QuickLinksComponent } from "./QuickLinksComponent/QuickLinksComponent";
import { SocialIconsComponent } from "../SocialIconsComponent/SocialIconsComponent";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";

type SocialIcons = {
  id: number;
  title: string;
  icon: string;
};

type QuickLinks = {
  id: number;
  title: string;
  url: string;
};

type BottomLinks = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  email: string;
  phone: string;
  socialIcons: SocialIcons[];
  quickLinks: QuickLinks[];
  bottomLinks: BottomLinks[];
};

export const FooterComponent = (props: Props) => {
  return (
    <AnimatedComponent direction='bottom'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-wrap items-center justify-between max-768:flex-col max-768:items-start max-768:gap-6'>
          {/* <Image src='/pngs/logo.png' alt="" fill /> */}
          <LogoAtom />

          <SocialIconsComponent socialIcons={props.socialIcons} />
        </div>

        <div className='footer-horizontal-line'></div>

        <div className='flex flex-wrap items-start justify-between max-768:flex-col max-768:gap-16'>
          <div className='flex w-4/6 flex-col max-768:w-full'>
            <div className='flex gap-4'>
              <div className='h20 relative w-20 max-768:w-12'>
                <Image
                  fill
                  src='/pngs/lets-work.png'
                  alt=''
                  className='h-full w-full'
                />
              </div>

              <div className='info-text footer-work-text'>{"Let's Work"}</div>
            </div>

            <div className='info-text footer-work-text'>Together</div>

            <div className='mt-12 flex flex-wrap gap-6 max-768:flex-col'>
              <Link
                href='/'
                className='footer-contact-link flex items-center justify-center gap-2'
              >
                <div className='info-text footer-contact-text'>
                  {props.email}
                </div>

                <ArrowUpOutlined
                  className='footer-arrow-icon cursor-pointer text-2xl text-white'
                  rotate={45}
                />
              </Link>

              <Link
                href='/'
                className='footer-contact-link flex items-center justify-center gap-2'
              >
                <div className='info-text footer-contact-text'>
                  {props.phone}
                </div>

                <ArrowUpOutlined
                  className='footer-arrow-icon cursor-pointer text-2xl text-white'
                  rotate={45}
                />
              </Link>
            </div>
          </div>

          <div className='flex w-2/6 flex-col gap-8 max-768:w-full'>
            <div className='info-text quick-link-text'>Quick Links</div>

            <div className='flex gap-20'>
              <QuickLinksComponent quickLinks={props.quickLinks.slice(0, 5)} />
              <QuickLinksComponent quickLinks={props.quickLinks.slice(5)} />
            </div>
          </div>
        </div>

        <div className='flex w-full justify-between max-768:flex-col max-768:gap-4'>
          <BottomLinksComponent bottomLinks={props.bottomLinks} />

          <div className='text-lg text-[#aaa] max-768:text-sm'>
            Copyright @2023, Ygency All Rights Reserved
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};
