import React from "react";
import { Logo } from "../utils/Logo";
import { NavLink } from "react-router-dom";
import { Container } from "../utils/Container";
import { IoMdImage } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdArchive } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header className="flex justify-center items-center py-2 sm:py-6">
        <Container>
          <div className="flex justify-between items-start flex-col md:flex-row">
            <Logo />
            <div className="hidden md:flex">
              <NavLink className={"text-gray-200 mr-5"} to="/image">
                Image
              </NavLink>
              <NavLink className={"text-gray-200 mr-5"} to="/text">
                Text
              </NavLink>
              <NavLink className={"text-gray-200 mr-5"} to="/chat">
                Chat
              </NavLink>
              <NavLink className={"text-gray-200 mr-5"} to="/archive">
                Archive
              </NavLink>
            </div>

            <div className="grid w-full grid-cols-4 md:hidden mt-4 mobile-nav">
              <NavLink
                className={
                  "text-gray-200 mr-5 flex justify-center items-center py-4 rounded"
                }
                to="/image"
              >
                <IoMdImage />
              </NavLink>
              <NavLink
                className={
                  "text-gray-200 mr-5 flex justify-center items-center py-4 rounded"
                }
                to="/text"
              >
                <IoDocumentText />
              </NavLink>
              <NavLink
                className={
                  "text-gray-200 mr-5 flex justify-center items-center py-4 rounded"
                }
                to="/chat"
              >
                <IoChatboxEllipses />
              </NavLink>
              <NavLink
                className={
                  "text-gray-200 mr-5 flex justify-center items-center py-4 rounded"
                }
                to="/archive"
              >
                <MdArchive />
              </NavLink>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
