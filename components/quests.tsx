import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { quests } from "@/lib/constants";
import { Progress } from "./ui/progress";
import Image from "next/image";

type Props = {
  points: number;
};

export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <div className="font-bold text-lg">
          <h3>Quests</h3>
        </div>
        <Link href="/quests">
          <Button size="sm" variant="secondaryOutline">
            Ver todo
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex items-center w-full p-4 gap-x-4 border-t-2"
              key={quest.title}
            >
              <Image src="/xp.png" alt="Points" width={25} height={25} />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
