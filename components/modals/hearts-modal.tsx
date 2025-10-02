"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/shop");
  };

  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/miguel-sad.png" alt="mascot" height={80} width={120} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            ¡Te quedaste sin corazones!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Cómpralos en la tienda.
          </DialogDescription>
          <DialogFooter className="mt-4">
            <div className="flex flex-col gap-y-2 w-full">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={onClick}
              >
                Ir a la tienda
              </Button>
              <Button
                variant="primaryOutline"
                className="w-full"
                size="lg"
                onClick={close}
              >
                No, gracias
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
