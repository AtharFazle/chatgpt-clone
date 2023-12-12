"use client";
import React from "react";
import VersionPicker from "@/components/home/version-picker";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Download, ArrowUp } from "lucide-react";
import Chat from "@/components/home/chat";
import { cn } from "@/lib/utils";
import { Chat as ChatTypes } from "@/types";

export default function Content() {
  const [chats,setChats] = React.useState<ChatTypes[]>([])
  
  const [message, setMessage] = React.useState("");

  const suggest = [
    {
      title: "Make a Content Strategy",
      desc: "for a new letter featuring free local weekend event"
    },
    {
      title: "Create Social Media Campaign",
      desc: "to promote upcoming community events"
    },
    {
      title: "Design Email Newsletter",
      desc: "highlighting latest product updates and offers"
    },
    {
      title: "Plan Marketing Workshop",
      desc: "for local businesses interested in digital marketing"
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChats([...chats, { role: "user", content: message }, { role: "system", content: "Currently, I haven't integrated this into the ChatGPT API." }]);
    setMessage("");
  }


  return (
    <div className="w-full h-screen flex flex-col items-center mx-auto ">
      <div className="min-h-[60px] flex items-center justify-between  w-full px-10 md:px-5 mb-5">
        <VersionPicker />
        <Button className="bg-white border hover:bg-accent" size={"icon"}>
          <Download className="text-black" size={20} />
        </Button>
      </div>
      <div className="h-[80vh] max-h-[80vh] w-full md:w-2/3 flex flex-col gap-10 overflow-auto">
        { chats.length < 1 ? (
          <div className="flex flex-col justify-center h-full items-center text-center space-y-5">
            <p className="p-3 border-2 rounded-full my-5">
              <Image
                alt="logo"
                src="/static/chatgpt-logo-transparent.png"
                width={50}
                height={50}
                className="rounded-full"
              />
            </p>
            <h1 className="font-bold text-xl">How I Can Help you Today?</h1>
            <div className={cn("grid grid-cols-2 gap-3")}>
              {suggest.map((item,index) => {
                return(
                  <div onClick={(e) => setChats([...chats, { role: "user", content: item.title }, { role: "system", content: "Currently, I haven't integrated this into the ChatGPT API." }])} key={index} className="border-2 rounded-xl p-4 text-left text-xs hover:bg-accent duration-200 ease-linear cursor-pointer">
                  <h1 className="text-sm font-medium">{item.title}</h1>
                  <h2 className="text-muted-foreground">
                    {item.desc}
                  </h2>
                </div>
                )
              })}
            </div>
          </div>
        ) : (
          chats.map((item, index) => {
            return (
              <Chat
                key={index}
                index={index}
                text={item.content}
                user={item.role}
              />
            );
          })
        )}
      </div>
      <div className="w-full md:w-2/3 mx-auto space-y-1 ">
      <form
        onSubmit={(e) => {
          handleSubmit(e) // Clear the input after submitting
        }}
        className="flex flex-row border-2 items-center shadow-md py-2 px-3 rounded-xl gap-2"
      >
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-xl py-0 px-0 focus-visible:ring-0 border-none shadow-none"
          placeholder="Message ChatGPT..."
        />
        <Button type="submit" size={"icon"}>
          <ArrowUp size={20} />
        </Button>
      </form>
        <p className="text-center text-xs text-muted-foreground">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}
