"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import profileImage from "../../../public/img/profileImg/jamesCarter_profile.svg";
import appIcon from "../../../public/img/icons/appIcon.svg";
import lineIcon from "../../../public/img/icons/lineIcon.svg";
import { IoIosMenu } from "react-icons/io";
import { SidebarNavItems } from "../data/SideBarNavItems";

const Sidebar = ({ user }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 rounded-md focus:outline-none"
        >
          <IoIosMenu size={28} />
        </button>
      </div>

      {/* Sidebar - Hidden on mobile unless menu is open */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 lg:top-0 w-full lg:w-[20%] bg-sidebarColor text-white h-screen p-6 transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      >
        <div className="mb-8">
          {/* Close button for mobile */}
          <div className="flex justify-between items-center md:hidden mb-4">
            <div></div> {/* Empty div for spacing */}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="pl-16 pb-8 hidden md:block">
            <Image
              src={appIcon}
              alt="App Icon"
              className="object-cover w-[41px] h-[36px]"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
              <Image
                src={profileImage}
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl md:text-[32px] font-semiBold text-center">
            {user?.name}
          </h2>

          <div className="flex flex-row justify-between mt-4 py-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium">{user?.bookings}</p>
              <p className="text-xs md:text-sm text-[#606060]">bookings</p>
            </div>
            <Image src={lineIcon} alt="Line Icon" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium">
                {user?.totalSpent}
              </p>
              <p className="text-xs md:text-sm text-[#606060]">total spent</p>
            </div>
          </div>
        </div>

        <nav>
          <ul className="space-y-3 md:space-y-4">
            {SidebarNavItems?.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 px-4 transition duration-200 text-sm md:text-base ${
                      pathname === item.path
                        ? "text-[#FDFDFD] font-semibold"
                        : "text-[#606060] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
