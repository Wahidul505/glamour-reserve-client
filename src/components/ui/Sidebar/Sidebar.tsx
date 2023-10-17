import Link from "next/link";
import React from "react";

interface IItem {
  key: string;
  label: string;
  href: string;
}

interface IProps {
  items: IItem[];
}

const Sidebar = ({ items }: IProps) => {
  return (
    <ul className="menu p-4 w-72 min-h-screen bg-base-200 text-base-content hidden lg:block">
      {/* Sidebar content here */}
      {items &&
        items?.map((item, index) => (
          <li key={index} className="my-2">
            <Link
              href={item.href}
              className="no-underline text-lg text-gray-700 mx-1"
            >
              {item.label}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Sidebar;
