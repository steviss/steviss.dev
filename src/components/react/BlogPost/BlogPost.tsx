import { FormattedDate } from "../FormattedDate";
import type { BlogPostProps } from "./BlogPost.interface";
import type { FC } from "react";

const BlogPost: FC<BlogPostProps> = ({ data, slug, index }) => {
  if (index % 2 === 0)
    return (
      <div className="flex flex-row-reverse md:contents">
        <div className="bg-orange-500 md:col-start-1 md:col-end-5 p-4 rounded-xl my-4 my-4 mr-auto md:mr-0 shadow-md">
          <a
            className="bg-orange-600 rounded-lg shadow-xl mb-5 lg:mb-0"
            href={`/blog/${slug}/`}
          >
            <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
          </a>
          <FormattedDate className="italic text-gray-600" date={data.pubDate} />
          <p className="leading-tight text-justify">{data.description}</p>
        </div>
        <div className="md:col-start-5 md:col-end-6 md:mx-auto relative mr-10">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-orange-800 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
        </div>
      </div>
    );
  return (
    <div className="flex md:contents">
      <div className="md:col-start-5 md:col-end-6 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-orange-800 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"></div>
      </div>
      <div className="bg-orange-500 md:col-start-6 md:col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
        <a
          className="bg-orange-600 rounded-lg shadow-xl mb-5 lg:mb-0"
          href={`/blog/${slug}/`}
        >
          <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
        </a>
        <FormattedDate className="italic text-gray-600" date={data.pubDate} />
      </div>
    </div>
  );
};

export default BlogPost;
