"use client";
import LoadingPage from "@/app/loading";
import { useSingleBlogQuery } from "@/redux/api/blogApi";
import React from "react";

const BlogDetails = ({ params }: { params: any }) => {
  const { blogId } = params;
  const { data, isLoading } = useSingleBlogQuery(blogId);
  if (isLoading) return <LoadingPage />;

  return (
    <div className="lg:px-28 px-4">
      <h1>{data?.title}</h1>
      <div className="lg:mt-10 mt-5 lg:text-lg">
        <p>{data?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
