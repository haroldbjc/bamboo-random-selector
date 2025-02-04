"use client";

import { AlertCircle, Dices, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import DishList, { DishType } from "@/components/DishList";
import RandomPicker, { RandomPickerRef } from "@/components/RandomPicker";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import foods from "@/constants/foods";

export default function Home() {
  const [list, setList] = useState<DishType[]>(() => {
    if (typeof window !== "undefined") {
      const savedList = localStorage.getItem("dishList");
      return savedList
        ? JSON.parse(savedList)
        : foods.map((item, index) => ({
            id: index,
            name: item.name,
            type: item.type,
            checked: true,
          }));
    }
    return foods.map((item, index) => ({
      id: index,
      name: item.name,
      type: item.type,
      checked: true,
    }));
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("dishList", JSON.stringify(list));
    }
  }, [list]);

  const isEmpty = useMemo(
    () => list.filter((item) => item.checked).length === 0,
    [list],
  );
  const [menuList, setMenuList] = useState<string[]>(
    list.map((item) => item.name),
  );
  const picker1Ref = useRef<RandomPickerRef>(null);
  const picker2Ref = useRef<RandomPickerRef>(null);
  const picker3Ref = useRef<RandomPickerRef>(null);

  const resetPickers = () => {
    picker1Ref.current?.reset();
    picker2Ref.current?.reset();
    picker3Ref.current?.reset();
  };

  const randomAll = () => {
    picker1Ref.current?.click();
    picker2Ref.current?.click();
    picker3Ref.current?.click();
  };

  const setChecked = (id: number) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  useEffect(() => {
    setMenuList(list.filter((item) => item.checked).map((item) => item.name));
  }, [list]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold text-center">新竹园 Bamboo</h1>
          <RandomPicker ref={picker1Ref} order={1} menuList={menuList} />
          <RandomPicker ref={picker2Ref} order={2} menuList={menuList} />
          <RandomPicker ref={picker3Ref} order={3} menuList={menuList} />
          <div className="flex flex-row gap-4 items-center">
            <Button variant="outline" onClick={resetPickers}>
              <RotateCcw /> 重置
            </Button>
            <Button onClick={randomAll} disabled={isEmpty}>
              <Dices /> 随机全部
            </Button>
          </div>
          <DishList list={list} setChecked={setChecked} />
          {isEmpty && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>No dish is selected.</AlertDescription>
            </Alert>
          )}
        </div>
      </main>
    </div>
  );
}
