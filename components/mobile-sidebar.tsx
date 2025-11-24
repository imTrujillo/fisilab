import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar />
      </SheetContent>
      <SheetTitle className="text-2xl flex gap-3 font-extrabold  text-slate-100 tracking-wider">
        Físilab
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </SheetTitle>
    </Sheet>
  );
};
