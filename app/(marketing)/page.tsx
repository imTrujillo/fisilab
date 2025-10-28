"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[980px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <Image src="/header-section.jpg" width={400} height={400} alt="hero" />
      <div className="relative w-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <div className="flex flex-col items-center justify-center gap-y-8 h-full ">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[420px] text-center">
            Descubre los misterios del universo con FísiLab.
          </h1>
          <h2 className="text-lg lg:text-xl font-bold text-neutral-500 text-center">
            Aprende física con tu amigo fiel, el ing. Miguel.
          </h2>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            {/* <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading> */}
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" variant="primary" className="w-full">
                    Empezar ahora
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    variant="secondaryOutline"
                    className="w-full"
                  >
                    Ya tengo una cuenta
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <Link href="/learn">Continuar aprendiendo</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
