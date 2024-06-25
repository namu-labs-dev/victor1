import { PricingAtom } from "~/components/Atoms/PricingAtom/PricingAtom";

type Props = React.ComponentProps<typeof PricingAtom>[];

export const PricingComponent = (props: Props) => {
  const packages = Object.values(props);

  return (
    <>
      {packages.map((item) => (
        <PricingAtom key={item.id} {...item} />
      ))}
    </>
  );
};
