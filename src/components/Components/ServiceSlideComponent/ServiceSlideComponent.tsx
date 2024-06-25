import { ServiceSlideAtom } from "~/components/Atoms/ServiceSlideAtom/ServiceSlideAtom";

type Slide = {
  id: number;
  title: string;
};

type Props = {
  slide: Slide[];
};

export const ServiceSlideComponent = (props: Props) => {
  return (
    <>
      {props.slide.map((item) => (
        <ServiceSlideAtom key={item.id} item={item} />
      ))}
    </>
  );
};
