"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import React from "react";

interface IItem {
  key: string;
  label: string;
  href: string;
}

interface IProps {
  centerItems: IItem[];
  endItems?: IItem[];
  sidebar: boolean;
}

const Navbar = ({ centerItems, endItems, sidebar }: IProps) => {
  const path = usePathname();
  return (
    <div className="px-12 bg-base-300 fixed right-0 left-0 top-0">
      <div className="navbar bg-base-300">
        {/* mobile device  */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        {/* desktop  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {centerItems &&
              centerItems?.map((item) => (
                <li
                  className={path == item?.href ? "active" : ""}
                  key={item?.href}
                >
                  <Link
                    href={item?.href}
                    className="no-underline text-lg text-gray-300 mx-1"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className={`drawer drawer-end ${!sidebar && "lg:hidden"}`}>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-end pr-4">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <HiMenuAlt3 className="text-3xl cursor-pointer" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <div className="flex justify-end mb-2 pr-2">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="cursor-pointer"
                  >
                    <CgClose className="text-gray-200 text-xl lg:text-2xl" />
                  </label>
                </div>
                {/* Sidebar content here */}
                <>
                  {endItems &&
                    endItems?.map((item) => (
                      <li
                        className={path == item?.href ? "active" : ""}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-300"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  {centerItems &&
                    centerItems?.map((item) => (
                      <li
                        className={`${
                          path == item?.href ? "active" : ""
                        } lg:hidden`}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-300"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
