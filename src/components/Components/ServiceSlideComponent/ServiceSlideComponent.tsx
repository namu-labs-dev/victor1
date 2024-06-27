import { ServiceSlideAtom } from "~/components/Atoms/ServiceSlideAtom/ServiceSlideAtom";

type Props = React.ComponentProps<typeof ServiceSlideAtom>[];

export const ServiceSlideComponent = (props: Props) => {
  const slide = Object.values(props);

  return (
    <>
      {slide.map((item) => (
        <ServiceSlideAtom key={item.id} {...item} />
      ))}
    </>
  );
};
