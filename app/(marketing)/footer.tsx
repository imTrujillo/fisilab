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
          <Image src="/explosion.png" alt="shop" height={30} width={30} />
          Física
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/vector.png" alt="shop" height={30} width={30} />
          Vectores
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/xp.png" alt="shop" height={30} width={30} />
          Energía
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/sound-wave.png" alt="shop" height={30} width={30} />
          Oscilaciones
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="w-auto flex justify-center gap-3"
        >
          <Image src="/earth.png" alt="shop" height={30} width={30} />
          ¡Y más!
        </Button>
      </div>
    </footer>
  );
};
