import { BlogAtom } from "~/components/Atoms/BlogAtom/BlogAtom";

type Blogs = {
  id: number;
  title: string;
  url: string;
  date: string;
  comment: string;
  img: string;
};

type Props = {
  blogs: Blogs[];
};

export const BlogComponent = (props: Props) => {
  return (
    <>
      {props.blogs.map((item) => (
        <BlogAtom key={item.id} item={item} />
      ))}
    </>
  );
};
