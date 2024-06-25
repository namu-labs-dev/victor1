import AnimatedComponent from "~/components/Components/AnimatedComponent/AnimatedComponent";
import "./custom.css";
import { BlogComponent } from "~/components/Components/BlogComponent/BlogComponent";

type Props = {
  blogInfo: string;
  blogTitle: string;
  blogs: React.ComponentProps<typeof BlogComponent>;
};

export const BlogModule = (props: Props) => {
  return (
    <div className='flex w-full flex-col items-center gap-10 bg-black p-8 py-16'>
      <AnimatedComponent direction='top'>
        <div className='flex w-full flex-col items-center gap-6'>
          <div className='info-text blog-info-text'>{props.blogInfo}</div>
          <div className='title-text w-2/3 text-center max-768:w-full max-768:text-3xl'>
            {props.blogTitle}
          </div>
        </div>
      </AnimatedComponent>

      <AnimatedComponent direction='bottom'>
        <div className='flex flex-wrap gap-4'>
          <BlogComponent {...props.blogs} />
        </div>
      </AnimatedComponent>
    </div>
  );
};
