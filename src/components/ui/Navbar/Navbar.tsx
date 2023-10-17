"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import React, { useEffect, useState } from "react";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/authToken";
import LoadingPage from "@/app/loading";
import {
  adminItems,
  clientItems,
  commonCenterItems,
  superAdminItems,
} from "@/constants/linkItems";

interface IProps {
  sidebar: boolean;
}

const authItems = [
  { key: "a", label: "Create an Account", href: "/signUp" },
  { key: "b", label: "Login", href: "/login" },
];

const Navbar = ({ sidebar }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    role: "",
  });

  const path = usePathname();
  const router = useRouter();
  const { userId, role } = getUserInfo() as any;
  const handleLogout = () => {
    removeUserInfo(authKey);
    setCurrentUser({ id: "", role: "" });
    router.push("/login");
  };

  useEffect(() => {
    if (userId && role) setCurrentUser({ id: userId, role: role });
    setIsLoading(false);
  }, [userId, role]);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="px-12 bg-[#15191E] fixed right-0 left-0 top-0 z-50">
      <div className="navbar bg-[#15191E]">
        {/* mobile device  */}
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl text-white">
            daisyUI
          </a>
        </div>
        {/* center items - desktop  */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {commonCenterItems?.map((item) => (
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

        {/* drawer content  */}
        <div className="navbar-end">
          {/* logout button for dashboard interface  */}
          {currentUser.id && !sidebar && (
            <button
              onClick={() => handleLogout()}
              className="border border-[#15191E] bg-white cursor-pointer text-[#15191E] h-10 hover:bg-[#15191E] hover:text-white text-lg lg:text-xl transition-colors duration-200 lg:w-32 mt-4  ml-3 hidden lg:block mb-3"
            >
              Logout
            </button>
          )}

          {/* sidebar  */}
          <div className={`drawer drawer-end ${!sidebar && "lg:hidden"}`}>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-end pr-4">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <HiMenuAlt3 className="text-3xl cursor-pointer text-gray-300" />
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
                    <CgClose className="text-gray-600 text-xl lg:text-2xl" />
                  </label>
                </div>
                {/* Sidebar content here */}
                <>
                  {/* auth items  */}
                  {!userId &&
                    authItems &&
                    authItems?.map((item) => (
                      <li
                        className={path == item?.href ? "active" : ""}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-600"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}

                  {/* end items  */}
                  {currentUser.role &&
                    currentUser.role === "admin" &&
                    adminItems?.map((item) => (
                      <li
                        className={path == item?.href ? "active" : ""}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-600"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  {currentUser.role &&
                    currentUser.role === "super_admin" &&
                    superAdminItems?.map((item) => (
                      <li
                        className={path == item?.href ? "active" : ""}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-600"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  {currentUser.role &&
                    currentUser.role === "client" &&
                    clientItems?.map((item) => (
                      <li
                        className={path == item?.href ? "active" : ""}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-600"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  {/* center items  */}
                  {commonCenterItems &&
                    commonCenterItems?.map((item) => (
                      <li
                        className={`${
                          path == item?.href ? "active" : ""
                        } lg:hidden`}
                        key={item?.href}
                      >
                        <Link
                          href={item?.href}
                          className="no-underline text-lg text-gray-600"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    ))}
                  <>
                    {currentUser.id && (
                      <button
                        onClick={() => handleLogout()}
                        className="border border-[#15191E] bg-white cursor-pointer text-[#15191E] h-10 hover:bg-[#15191E] hover:text-white text-lg lg:text-xl transition-colors duration-200 w-44 mt-4  ml-3"
                      >
                        Logout
                      </button>
                    )}
                  </>
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
