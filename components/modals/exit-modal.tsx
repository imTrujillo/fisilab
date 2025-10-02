"use client";

import { useExitModal } from "@/store/use-exit-modal";
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

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

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
          <DialogTitle className="text-center font-bold text-2xl text-neutral-700">
            ¡Espera, no te vayas!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Estás apunto de dejar la lección. ¿Estás seguro?
          </DialogDescription>
          <DialogFooter className="mt-4">
            <div className="flex flex-col gap-y-2 w-full">
              <Button
                variant="primary"
                className="w-full"
                size="lg"
                onClick={close}
              >
                Seguir aprendiendo
              </Button>
              <Button
                variant="dangerOutline"
                className="w-full"
                size="lg"
                onClick={() => {
                  close();
                  router.push("/learn");
                }}
              >
                Terminar sesión
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
