import React from "react";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-bg-footer">
      <div className="container sm:flex justify-between items-center gap-6 ">
        <div className="flex gap-16 text-center">
          <div className="space-y-6">
            {" "}
            <Image
              aria-hidden
              src="/logo.svg"
              alt="My team group logo"
              width={160}
              height={40}
            />
            <div className="sm:flex items-center gap-4 hidden">
              <a className="font-semibold text-white text-lg" href="#">
                home
              </a>
              <a className="font-semibold text-white text-lg" href="#">
                about
              </a>
            </div>
          </div>
          <p className="text-white/85 text-base font-medium max-w-[200px] w-full text-left">
            987 Hillcrest Lane Irvine, CA California 92714 Call Us :
            949-833-7432
          </p>
        </div>
        <div className="text-white flex items-center gap-4">
          <FaFacebookSquare size={24} />
          <FaPinterest size={24} />
          <FaTwitter size={24} />
        </div>
      </div>
    </div>
  );
};
