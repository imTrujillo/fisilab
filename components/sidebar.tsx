"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import Link from "next/link";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.png" height={40} width={40} alt="logo" />
          <h1 className="text-2xl font-extrabold  text-slate-700 tracking-wider">
            FísiLab
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Aprende" href="/learn" iconSrc="/house.png" />
        <SidebarItem
          label="Ranking"
          href="/leaderboard"
          iconSrc="/leaderboard.png"
        />
        <SidebarItem label="Misiones" href="/quests" iconSrc="/quests.png" />
        <SidebarItem label="Tienda" href="/shop" iconSrc="/shop.png" />
      </div>
      <div className="p-4">
        {/* <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading> */}
        <ClerkLoaded>
          <div className="flex gap-2 justify-start items-center">
            <UserButton />
            <h3 className="text-lg font-bold text-neutral-600">Mi perfil</h3>
          </div>
        </ClerkLoaded>
      </div>
    </div>
  );
};
