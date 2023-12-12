"use client";
import React from "react";
import clsx from "clsx";
import { ArrowLeft, ClipboardEdit, Edit } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  const Sidebar_animation = {
    open: {
      width: "19rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0rem",
      x: -100,
      transition: {
        damping: 40,
      },
    },
  };
  const Sidebar_animation_arrow = {
    open: {
      rotate: 180,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <>
      <motion.aside
        variants={Sidebar_animation}
        animate={open ? "open" : "closed"}
        className={clsx(
          "bg-black text-white px-5 max-h-screen py-4 overflow-y-auto text-sm",
          "absolute left-0 md:relative z-50"
        )}
      >
        <div
          className={cn(
            "flex flex-row items-center px-2 py-1 w-full gap-2 ease-linear duration-200  rounded-xl hover:bg-muted/30 cursor-pointer"
          )}
        >
          <p className="p-1 border-2 rounded-full bg-white">
            <Image
              alt="logo"
              src="/static/chatgpt-logo-transparent.png"
              width={20}
              height={20}
              className="rounded-full"
            />
          </p>
          <div className="flex justify-between w-full">
            <p>New Chat</p>
            <ClipboardEdit size={18} />
          </div>
        </div>
        <div className="min-h-[50vh]">
          <div className="space-y-5 mt-10">
            <ul className="text-xs space-y-0.5">
              <li className="text-muted-foreground font-light p-2">
                Yesterday
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
          <div className="space-y-5 mt-10">
            <ul className="text-xs space-y-0.5">
              <li className="text-muted-foreground font-light p-2">
                Previous 7 Days
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
          <div className="space-y-5 mt-10">
            <ul className="text-xs space-y-0.5">
              <li className="text-muted-foreground font-light p-2">
                Previous 30 Days
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
              <li className="text-sm duration-200 ease-in-out hover:bg-muted/30 p-2 rounded-xl cursor-pointer">
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-48" />
        <div className="text-white flex flex-row items-center gap-2 mt-2 p-1 hover:bg-muted/30 cursor-pointer">
          <Avatar className="-z-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Athar Mawla</h1>
        </div>
      </motion.aside>
      <motion.p
        variants={Sidebar_animation_arrow}
        animate={open ? "open" : "closed"}
        className="absolute top-1/2 left-5 z-50 p-1 duration-200 ease-linear cursor-pointer bg-purple-500 rounded-full"
      >
        <ArrowLeft
          className={clsx("text-white")}
          onClick={handleOpen}
        />
      </motion.p>
    </>
  );
}
