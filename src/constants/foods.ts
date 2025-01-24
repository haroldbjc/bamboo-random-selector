export type FoodType = {
  name: string;
  type: 'vegetable' | 'meat';
};

const foods: FoodType[] = [
  { name: "🥢 炒粿条", type: "meat" },
  { name: "🥢 福建面", type: "meat" },
  { name: "🍲 肉骨茶", type: "meat" },
  { name: "🍗 海南鸡饭", type: "meat" },
  { name: "🥟 点心", type: "meat" },
  { name: "🍖 糖醋排骨", type: "meat" },
  { name: "🍗 宫保鸡丁", type: "meat" },
  { name: "🍲 麻婆豆腐", type: "vegetable" },
  { name: "🥬 炒芥兰", type: "vegetable" },
  { name: "🍚 蛋炒饭", type: "vegetable" },
  { name: "🥠 春卷", type: "vegetable" },
  { name: "🍜 云吞汤", type: "meat" },
  { name: "🦆 北京烤鸭", type: "meat" },
  { name: "🍚 糯米鸡", type: "meat" },
  { name: "🍲 砂锅鸡饭", type: "meat" },
  { name: "🍢 酿豆腐", type: "vegetable" },
  { name: "🍤 咸蛋黄虾", type: "meat" },
  { name: "🍲 潮州粥", type: "vegetable" },
  { name: "🍲 红烧豆腐", type: "vegetable" },
  { name: "🥗 炒豆芽", type: "vegetable" },
  { name: "🍲 酸辣汤", type: "vegetable" },
];

export default foods;