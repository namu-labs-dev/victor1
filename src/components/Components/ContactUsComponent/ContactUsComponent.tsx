import { ContactAddressAtom } from "~/components/Atoms/ContactAddressAtom/ContactAddressAtom";
import { SocialIconsAtom } from "~/components/Atoms/SocialIconsAtom/SocialIconsAtom";

type Props = {
  contactInfo: string;
  contactTitle: string;
  locations: React.ComponentProps<typeof ContactAddressAtom>[];
  icons: React.ComponentProps<typeof SocialIconsAtom>;
};

export const ContactUsComponent = (props: Props) => {
  return (
    <div className='flex w-full flex-col gap-6 lg:w-1/2'>
      <div className='info-text'>{props.contactInfo}</div>
      <div className='title-text'>{props.contactTitle}</div>

      <div className='flex flex-wrap items-start gap-10 sm:flex-nowrap'>
        {props.locations.map((item) => (
          <ContactAddressAtom key={item.id} {...item} />
        ))}
      </div>

      <div className='mt-10 text-[22px] font-bold text-white'>Follow Us</div>

      <SocialIconsAtom {...props.icons} />
    </div>
  );
};
