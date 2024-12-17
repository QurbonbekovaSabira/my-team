import React from "react";
import { Button } from "@/components/custom/button";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <div className="container pt-[77px] flex items-center justify-between">
      <div className="flex items-center gap-20">
        <Image
          aria-hidden
          src="/logo.svg"
          alt="My team group logo"
          width={160}
          height={40}
        />
        <div className="sm:flex items-center gap-10 hidden">
          <a className="font-semibold text-white text-lg" href="#">
            home
          </a>
          <a className="font-semibold text-white text-lg" href="#">
            about
          </a>
        </div>
      </div>
      <Button variant="primary" className="sm:inline-block hidden">
        contact us
      </Button>
      <Sheet>
        <SheetTrigger className="sm:hidden block ">
          <CiMenuBurger size={20} className="text-white" />
        </SheetTrigger>
        <SheetContent className=" bg-bg-secondary space-y-5">
          <SheetTitle>
            <Image
              aria-hidden
              src="/logo.svg"
              alt="Window icon"
              width={120}
              height={20}
            />
          </SheetTitle>
          <div className="flex flex-col gap-4">
            <a className="font-semibold text-white text-lg block" href="#">
              home
            </a>
            <a className="font-semibold text-white text-lg block" href="#">
              about
            </a>
            <Button variant="primary">contact us</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
