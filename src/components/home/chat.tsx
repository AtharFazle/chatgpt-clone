"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import clsx from "clsx";

interface Chat {
  text: string;
  index: number;
  user: string;
}

export default function Chat({ index, text, user }: Chat) {
  const isOddIndex = index + (1 % 2) === 1;
  return (
    <div
      className={clsx(
        "flex flex-row gap-4 text-sm justify-end",
        isOddIndex ? "justify-start" : "justify-end"
      )}
    >
      <Avatar>
        {isOddIndex ? (
          <>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>You</AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage src="/static/chatGpt-logo.png" />
            <AvatarFallback>gpt</AvatarFallback>
          </>
        )}
      </Avatar>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-bold tracking-tight text-base capitalize">{user}</h1>
        <p className="">
          {user === "user" ? (
            text
          ):(
            <Typewriter
            words={[text]}
            loop={1}
            cursor
            cursorStyle="✍️"
            typeSpeed={50}
            delaySpeed={500}
          />
          )}
        </p>
        <p className="flex flex-row gap-5 text-sm ">
          {" "}
          <Copy size={15} className="text-muted-foreground hover:text-black duration-200 ease-in-out cursor-pointer"/> <ThumbsUp size={15} className="text-muted-foreground hover:text-black duration-200 ease-in-out cursor-pointer"/> <ThumbsDown size={15} className="text-muted-foreground hover:text-black duration-200 ease-in-out cursor-pointer"/>{" "}
          <RefreshCw className="text-muted-foreground hover:text-black duration-200 ease-in-out cursor-pointer" size={15} />
        </p>
      </div>
    </div>
  );
}
