"use client";
import React from "react";
import HomePageHeading from "./HomePageHeading";
import { useBlogsQuery } from "@/redux/api/blogApi";
import LoadingPage from "@/app/loading";
import BlogCard from "../Blog/BlogCard";

const MakeupBlog = () => {
  const { data, isLoading } = useBlogsQuery(undefined);
  if (isLoading) return <LoadingPage />;

  const blogData = data?.slice(0, 3);

  return (
    <div>
      <HomePageHeading label="Makeup Blogs" subLabel="Our" />
      <div className="bg-black lg:px-28 px-4 py-20 mb-8 lg:mb-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {blogData &&
          blogData?.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} theme="dark" />
          ))}
      </div>
    </div>
  );
};

export default MakeupBlog;
