import "./custom.css";
import { FooterComponent } from "~/components/Components/FooterComponent/FooterComponent";

type Props = {
  footerContentProps: React.ComponentProps<typeof FooterComponent>;
};

export const FooterModule = (props: Props) => {
  return <FooterComponent {...props.footerContentProps} />;
};
