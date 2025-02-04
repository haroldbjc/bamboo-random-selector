"use client";

import { Salad } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "./ui/checkbox";
import { FoodType } from "@/constants/foods";

export type DishType = FoodType & {
  id: number;
  checked: boolean;
};

type Dish = {
  list: DishType[];

  setChecked: (id: number) => void;
};

export default function DishList({ list, setChecked }: Dish) {
  const vegetables = list.filter((item) => item.type === "vegetable");
  const meats = list.filter((item) => item.type === "meat");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Salad />
          菜单
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm max-h-[80vh] overflow-y-auto">
          <DrawerHeader>
            <DrawerTitle>新竹园 Bamboo</DrawerTitle>
            <DrawerDescription>设置随机菜单池</DrawerDescription>
          </DrawerHeader>
          <Tabs defaultValue="vegetable" className="px-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vegetable">蔬菜类</TabsTrigger>
              <TabsTrigger value="meat">肉类</TabsTrigger>
            </TabsList>
            <TabsContent value="vegetable" className="py-2">
              <div className="m-auto pb-0 gap-3 flex flex-col max-w-xs">
                {vegetables.map((item, index) => (
                  <div
                    className="flex flex-row justify-between items-start space-y-0"
                    key={index}
                  >
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.name}
                    </label>
                    <Checkbox
                      id={`${item.name}-${index}`}
                      checked={item.checked}
                      onClick={() => setChecked(item.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="meat" className="py-2">
              <div className="m-auto pb-0 gap-3 flex flex-col max-w-xs">
                {meats.map((item, index) => (
                  <div
                    className="flex flex-row justify-between items-start space-y-0"
                    key={index}
                  >
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.name}
                    </label>
                    <Checkbox
                      id={`${item.name}-${index}`}
                      checked={item.checked}
                      onClick={() => setChecked(item.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">返回</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
