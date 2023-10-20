import { useRouter } from "next/navigation";
import React from "react";

const BlogBanner = ({ blog }: { blog: any }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blog/${blog?.id}`)}
      className="bg-base-300 z-0 lg:m-8 m-3 cursor-pointer overflow-hidden"
    >
      <div className="hero-content text-center hover:scale-105 transition-transform duration-700 ease-in-out">
        <div className="max-w-md">
          <h1 className="lg:text-3xl font-bold">{blog?.title}</h1>
          <p className="py-6">{blog?.content?.slice(0, 200)}...</p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
