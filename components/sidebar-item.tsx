"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="flex justify-start h-[52px]"
    >
      <Link href={href} className="flex justify-start items-center">
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          width={30}
          height={30}
        />
        {label}
      </Link>
    </Button>
  );
};
