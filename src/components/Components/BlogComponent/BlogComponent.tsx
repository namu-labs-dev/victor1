import { BlogAtom } from "~/components/Atoms/BlogAtom/BlogAtom";

type Props = React.ComponentProps<typeof BlogAtom>;

export const BlogComponent = (props: Props[]) => {
  const blogs = Object.values(props);

  return (
    <>
      {blogs.map((item, index) => (
        <BlogAtom key={index} {...item} />
      ))}
    </>
  );
};
