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
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/logo.png" alt="mascot" height={80} width={80} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            ¡Lección de práctica!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Practica tus lecciones para ganar corazones y puntos. No puedes
            perderlos
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={close}
              >
                Entiendo
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
