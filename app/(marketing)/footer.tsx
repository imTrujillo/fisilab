import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/physic_1/course.png" alt="shop" height={30} width={30} />
          Física
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/physic_2/course.png" alt="shop" height={30} width={30} />
          Física II
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/physic_3/course.png" alt="shop" height={30} width={30} />
          Física III
        </Button>
        <Button size="lg" variant="ghost" className="w-auto">
          Acerca de
        </Button>
      </div>
    </footer>
  );
};
