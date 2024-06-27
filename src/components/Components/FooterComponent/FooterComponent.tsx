import { ArrowUpOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import React from "react";
import { SocialIconsAtom } from "~/components/Atoms/SocialIconsAtom/SocialIconsAtom";
import { QuickLinksAtom } from "~/components/Atoms/QuickLinksAtom/QuickLinksAtom";
import { BottomLinksAtom } from "~/components/Atoms/BottomLinksAtom/BottomLinksAtom";

type Props = {
  email: string;
  phone: string;
  socialIcons: React.ComponentProps<typeof SocialIconsAtom>;
  quickLinks: React.ComponentProps<typeof QuickLinksAtom>;
  bottomLinks: React.ComponentProps<typeof BottomLinksAtom>;
};

export const FooterComponent = (props: Props) => {
  return (
    <AnimatedComponent direction='bottom'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col flex-wrap items-start justify-between gap-6 md:flex-row md:items-center'>
          <LogoAtom height={200} width={250} />

          <SocialIconsAtom {...props.socialIcons} />
        </div>

        <div className='footer-horizontal-line'></div>

        <div className='flex flex-wrap items-start justify-between max-768:flex-col max-768:gap-16'>
          <div className='flex w-full flex-col md:w-4/6'>
            <div className='flex flex-wrap gap-4'>
              <div className='h20 relative w-[42px] md:w-[75px]'>
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

            <div className='mt-12 flex flex-col flex-wrap gap-6 md:flex-row'>
              <Link
                href='/'
                className='footer-contact-link flex items-center justify-center gap-2 sm:w-[70%] md:w-auto'
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
                className='footer-contact-link flex items-center justify-center gap-2 sm:w-[70%] md:w-auto'
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

          <div className='flex w-full flex-col gap-8 md:w-2/6'>
            <div className='info-text quick-link-text'>Quick Links</div>

            <div className='flex w-full justify-between gap-20'>
              <QuickLinksAtom {...props.quickLinks.slice(0, 5)} />
              <QuickLinksAtom {...props.quickLinks.slice(5)} />
            </div>
          </div>
        </div>

        <div className='flex w-full justify-between max-768:flex-col max-768:gap-4'>
          <BottomLinksAtom {...props.bottomLinks} />

          <div className='text-lg text-[#aaa] max-768:text-sm'>
            Copyright @2023, Ygency All Rights Reserved
          </div>
        </div>
      </div>
    </AnimatedComponent>
  );
};
