import React, { useContext, useState } from "react";
import { Context } from "../context/contextApi";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import LangToggle from "../translations/LangToggle";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu, t } = useContext(Context);
  const placeholderText = t("header.searchPlaceholder");
  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "clicked") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResults/${searchQuery}`);
    }
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split('/')?.filter(Boolean)?.[0];

  return (
    <header className="header sticky w-full z-50 top-0 bg-black">
      <div className="flex justify-between px-3 pb-4 h-[60px]">
        {loading && <Loader />}

        <div className="flex items-center gap-x-3">
          {
            pageName !== 'video' && (
              <div className="flex items-center md:hidden" onClick={() => setMobileMenu((prev) => !prev)}>
                {
                  mobileMenu ? <CgClose /> : <SlMenu />
                }
              </div>
            )
          }
          <Link to={"/"}>
            <div className="">
              <img
                className="w-[90px] h-[20px] hidden md:block"
                src="/yt-logo.png"
                alt="yt_logo"
              />
              <img className="w-[30px] h-[20px] md:hidden block" src="/yt-logo-mobile.png" alt="yt-mobile" />
            </div>
          </Link>
        </div>
        <div className="group flex items-center pt-1">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 relative">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              placeholder={placeholderText}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            {searchQuery.length > 0 && (
              <span
                className="absolute lg:right-[6px] lg:top-[7px] md:right-[6px] md:top-[9px] right-[6px] top-[6px] cursor-pointer"
                onClick={() => setSearchQuery("")}
              >
                <CgClose className="text-white md:text-[18px] lg:text-[22px] text-[15px]" />
              </span>
            )}
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("clicked")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>
        <div className="flex items-center">
          <LangToggle />
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
