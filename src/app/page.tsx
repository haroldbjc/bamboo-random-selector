"use client";

import { useRef } from "react";
import RandomPicker, { RandomPickerRef } from "@/components/RandomPicker";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function Home() {
  const picker1Ref = useRef<RandomPickerRef>(null);
  const picker2Ref = useRef<RandomPickerRef>(null);
  const picker3Ref = useRef<RandomPickerRef>(null);

  const resetPickers = () => {
    picker1Ref.current?.reset();
    picker2Ref.current?.reset();
    picker3Ref.current?.reset();
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold">Bamboo Random Selector</h1>
          <RandomPicker ref={picker1Ref} order={1} />
          <RandomPicker ref={picker2Ref} order={2} />
          <RandomPicker ref={picker3Ref} order={3} />
          <Button variant="outline" onClick={resetPickers}>
            <RotateCcw /> Reset
          </Button>
        </div>
      </main>
    </div>
  );
}