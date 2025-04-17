"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`nav ${scroll ? `bg-white shadow-md` : ``}  `}>
      <nav
        className={`container mx-auto flex justify-between items-center px-3 ${
          scroll ? `py-5` : `py-12`
        }`}
      >
        <Link href={"/"} id="logo">
          <Image
            src="/images/logo.png"
            alt="Learnova Logo"
            width={200}
            height={200}
            id="logo"
          />
        </Link>
        <ul className="flex gap-4 not-md:hidden">
          <li className="flex justify-center items-center">
            <Link
              href="next.js"
              className="hover:text-blue-500 transition  text-xl"
            >
              Home
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link
              href="#about"
              className="hover:text-blue-500 transition  text-xl"
            >
              About
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link
              href="next.js"
              className="hover:text-blue-500 transition  text-xl"
            >
              Services
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link
              href="next.js"
              className="hover:text-blue-500 transition  text-xl"
            >
              Programs
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <Link
              href="https://twitter.com/vercel"
              className="hover:text-blue-500 transition text-xl"
            >
              Team
            </Link>
          </li>
        </ul>
        <button className="md:hidden text-3xl" onClick={handleOpen}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div
        className={`${
          open
            ? ` fixed top-0 right-0 bg-black/50 w-full h-full transition z-10`
            : `hidden`
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleOpen();
        }}
      ></div>

      <div
        className={open ? `sidebar open` : `sidebar`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
    </div>
  );
}
