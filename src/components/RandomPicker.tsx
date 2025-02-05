import { forwardRef, useImperativeHandle, useState } from "react";
import { Dice1, Dice2, Dice3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  order: number;

  click: (arg0: string) => string;
};

export interface RandomPickerRef {
  reset: () => void;
  click: () => void;
}

const RandomPicker = forwardRef<RandomPickerRef, Props>(
  ({ order, click }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFood, setSelectedFood] = useState(`菜肴 ${order}`);

    const handleClick = () => {
      setIsLoading(true);
      const food = click(selectedFood);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      if (food) setSelectedFood(food);
    };

    useImperativeHandle(ref, () => ({
      reset() {
        setSelectedFood(`菜肴 ${order}`);
      },
      click() {
        handleClick();
      },
    }));

    const dice = () => {
      switch (order) {
        case 1:
          return <Dice1 />;
        case 2:
          return <Dice2 />;
        case 3:
          return <Dice3 />;
        default:
          return <></>;
      }
    };

    return (
      <div className="flex flex-row gap-4">
        {isLoading ? (
          <Skeleton className="h-[36px] w-[216px] rounded-xl" />
        ) : (
          <Input
            readOnly
            value={selectedFood}
            className="w-[216px] "
            aria-label={`菜肴 ${order}`}
          />
        )}

        <Button
          onClick={handleClick}
          size="icon"
          aria-label={`随机选择菜肴 ${order}`}
        >
          {dice()}
        </Button>
      </div>
    );
  },
);

RandomPicker.displayName = "RandomPicker";

export default RandomPicker;
