import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton"
import { forwardRef, useImperativeHandle, useState } from "react";
import foods from "@/constants/foods";

type Props = {
  order: number;
};

export interface RandomPickerRef {
  reset: () => void;
}

const RandomPicker = forwardRef<RandomPickerRef, Props>(({ order }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFood, setSelectedFood] = useState(`Food ${order}`);

  const handleClick = () => {
    setIsLoading(true);
    setSelectedFood(foods[Math.floor(Math.random() * foods.length)]);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useImperativeHandle(ref, () => ({
    reset() {
      setSelectedFood(`Food ${order}`);
    }
  }));

  return (
    <div className="flex flex-row gap-4">
      {isLoading ? <Skeleton className="h-[36px] w-[216px] rounded-xl" /> : <Input readOnly value={selectedFood} className="w-[216px] "/>}
      
      <Button onClick={handleClick}>Random</Button>
    </div>
  )
});

RandomPicker.displayName = "RandomPicker";

export default RandomPicker;