import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Dice1, Dice2, Dice3 } from "lucide-react";

type Props = {
  order: number;
  menuList: string[];
};

export interface RandomPickerRef {
  reset: () => void;
  click: () => void;
}

const RandomPicker = forwardRef<RandomPickerRef, Props>(
  ({ order, menuList }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFood, setSelectedFood] = useState(`菜肴 ${order}`);

    const handleClick = () => {
      setIsLoading(true);
      setSelectedFood(menuList[Math.floor(Math.random() * menuList.length)]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
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
          <Input readOnly value={selectedFood} className="w-[216px] " />
        )}

        <Button
          onClick={handleClick}
          size="icon"
          disabled={menuList.length === 0}
        >
          {dice()}
        </Button>
      </div>
    );
  },
);

RandomPicker.displayName = "RandomPicker";

export default RandomPicker;
