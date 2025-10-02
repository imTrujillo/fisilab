import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
};
export const UserProgress = ({ activeCourse, points, hearts }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/xp.png"
            height={28}
            width={28}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/heart.png"
            height={28}
            width={28}
            alt="Hearts"
            className="mr-2"
          />
          {hearts}
        </Button>
      </Link>
    </div>
  );
};
