import React from "react";
import { ContactUsComponent } from "~/components/Components/ContactUsComponent/ContactUsComponent";
import { MapComponent } from "~/components/Components/MapComponent/MapComponent";
import { QuoteComponent } from "~/components/Components/QuoteComponent/QuoteComponent";

type Props = {
  contactContentProps: React.ComponentProps<typeof ContactUsComponent>;
};

export const ContactUsModule = (props: Props) => {
  return (
    <div className='bg-black'>
      <div
        className='flex h-[30vh] flex-col items-center justify-center gap-2 lg:h-[80vh]'
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0, 0.9), rgba(0,0,0, 0.9)), url('/jpgs/thumbnail.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='lg:title-text text-[30px] font-bold text-white sm:text-[40px]'>
          Contact
        </div>

        <div className='flex items-center gap-2 lg:gap-4'>
          <div className='text-[14px] text-[#aaa] sm:text-[18px] lg:text-[20px]'>
            Home
          </div>
          <div className='text-[14px] text-[#fff] sm:text-[18px]'>{">"}</div>
          <div className='text-[14px] text-primary-color underline sm:text-[18px] lg:text-[20px]'>
            Contact
          </div>
        </div>
      </div>

      <div className='p-8'>
        <div className='flex w-full flex-col justify-between gap-16 py-28 lg:flex-row'>
          <ContactUsComponent {...props.contactContentProps} />

          <QuoteComponent />
        </div>

        <MapComponent />
      </div>
    </div>
  );
};
