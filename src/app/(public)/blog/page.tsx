"use client";
import LoadingPage from "@/app/loading";
import BlogBanner from "@/components/ui/Blog/BlogBanner";
import BlogCard from "@/components/ui/Blog/BlogCard";
import CommonHeading from "@/components/ui/Heading/CommonHeading";
import { useBlogsQuery } from "@/redux/api/blogApi";
import React from "react";

const BlogPage = () => {
  const { data, isLoading } = useBlogsQuery(undefined);
  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <CommonHeading label="Blogs" />
      <div className="lg:px-28 px-4 py-20 mb-8 lg:mb-12 grid md:grid-cols-2 grid-cols-1">
        {data &&
          data?.map((blog: any) => <BlogBanner key={blog?.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogPage;
