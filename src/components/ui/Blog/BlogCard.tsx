import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  blog: any;
  theme: "dark" | "light";
}

const BlogCard = ({ blog, theme }: IProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/blog/${blog?.id}`)}
      className="m-4 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <Image
          src="https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
          alt=""
          width={300}
          height={300}
          className=" hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div
        className={`lg:text-xl uppercase mt-3 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {blog?.title}
      </div>
    </div>
  );
};

export default BlogCard;
