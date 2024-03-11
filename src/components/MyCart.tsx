"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/utils/cn";
import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import CartItems from "./CartItems"
import { ScrollArea } from "@/components/ui/scroll-area"
// import { Separator } from "@/components/ui/separator"
const SHEET_SIDES = ["right",] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function MyCart() {
  const [product,setProduct]=useState(0)
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <span className=" cursor-pointer text-center">Cart ({product})</span>
          </SheetTrigger>
          <ScrollArea>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-80  rounded-md border">
              <CartItems/>
            </ScrollArea>

            
            <SheetFooter className="mt-10">
              <SheetClose asChild>
              <button
        
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Check Out &rarr;
          <BottomGradient />
        </button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
          </ScrollArea>
        </Sheet>
      ))}
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
