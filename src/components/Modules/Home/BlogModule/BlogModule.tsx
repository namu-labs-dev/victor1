import "./custom.css";
import { BlogComponent } from "~/components/Components/BlogComponent/BlogComponent";

type Blogs = {
  id: number;
  title: string;
  url: string;
  date: string;
  comment: string;
  img: string;
};

type Props = {
  blogInfo: string;
  blogTitle: string;
  blogs: Blogs[];
};

export const BlogModule = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center gap-6 bg-black p-8'>
      <div className='info-text blog-info-text'>{props.blogInfo}</div>
      <div className='title-text w-2/3 text-center max-768:w-full max-768:text-3xl'>
        {props.blogTitle}
      </div>

      <div className='flex flex-wrap gap-4'>
        <BlogComponent blogs={props.blogs} />
      </div>
    </div>
  );
};
