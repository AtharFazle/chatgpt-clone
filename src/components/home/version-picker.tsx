"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ChevronDown, Download } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function VersionPicker() {
  const [version, setVersion] = React.useState("3.5");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-2 rounded-xl text-lg focus-visible:bg-accent font-semibold ring-none flex flex-row items-center">
        ChatGpt <span className="text-muted-foreground mx-1">{version} </span>{" "}
        <ChevronDown size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl w-[350px]">
        <DropdownMenuRadioGroup
          className="px-0"
          value={version}
          onValueChange={setVersion}
        >
          <DropdownMenuRadioItem
            value="3.5"
            className="flex flex-row gap-2 p-3 cursor-pointer"
          >
            <LightningBoltIcon className="w-5 h-5" />
            <div className="">
              <h1>GPT-3.5</h1>
              <h2 className="text-muted-foreground text-xs">
                Great for everyday Tasks
              </h2>
            </div>
          </DropdownMenuRadioItem>
          <Separator />
        </DropdownMenuRadioGroup>
        <DropdownMenuItem className="flex flex-row gap-2 p-3 cursor-pointer">
          <LightningBoltIcon className="w-5 h-5" />
          <div className="">
            <h1>GPT-4.0</h1>
            <h2 className="text-muted-foreground text-xs">
              Our Smartest and most capable Model. Includes DALL:E, Browsing and
              more
            </h2>
            <Button
              className="my-2 text-xs bg-purple-400 w-full hover:bg-purple-500 "
              variant={"default"}
              size={"sm"}
            >
              {" "}
              Upgrade to plus
            </Button>
          </div>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="gap-2 p-3 cursor-pointer">
          <Download size={15} />
          Share the chat
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
