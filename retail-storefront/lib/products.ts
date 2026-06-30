export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  tag?: "New" | "Sale" | "Bestseller";
  gradient: string;
  emoji: string;
};

export const categories = [
  { id: "all", name: "All" },
  { id: "living", name: "Living" },
  { id: "kitchen", name: "Kitchen" },
  { id: "decor", name: "Decor" },
  { id: "lighting", name: "Lighting" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Linen Lounge Chair",
    category: "living",
    price: 89.0,
    tag: "Bestseller",
    gradient: "from-amber-200 to-orange-300",
    emoji: "🪑",
  },
  {
    id: "p2",
    name: "Ceramic Pour-Over Set",
    category: "kitchen",
    price: 22.5,
    oldPrice: 30.0,
    tag: "Sale",
    gradient: "from-sky-200 to-blue-300",
    emoji: "☕",
  },
  {
    id: "p3",
    name: "Arc Floor Lamp",
    category: "lighting",
    price: 64.0,
    tag: "New",
    gradient: "from-violet-200 to-indigo-300",
    emoji: "💡",
  },
  {
    id: "p4",
    name: "Woven Throw Blanket",
    category: "living",
    price: 18.0,
    gradient: "from-rose-200 to-pink-300",
    emoji: "🧶",
  },
  {
    id: "p5",
    name: "Stoneware Dinner Set",
    category: "kitchen",
    price: 45.0,
    tag: "Bestseller",
    gradient: "from-emerald-200 to-teal-300",
    emoji: "🍽️",
  },
  {
    id: "p6",
    name: "Brass Wall Mirror",
    category: "decor",
    price: 38.5,
    gradient: "from-yellow-200 to-amber-300",
    emoji: "🪞",
  },
  {
    id: "p7",
    name: "Terracotta Planter",
    category: "decor",
    price: 12.0,
    oldPrice: 16.0,
    tag: "Sale",
    gradient: "from-orange-200 to-red-300",
    emoji: "🪴",
  },
  {
    id: "p8",
    name: "Oak Side Table",
    category: "living",
    price: 56.0,
    tag: "New",
    gradient: "from-stone-200 to-amber-200",
    emoji: "🪵",
  },
  {
    id: "p9",
    name: "Pendant Glass Light",
    category: "lighting",
    price: 41.0,
    gradient: "from-cyan-200 to-sky-300",
    emoji: "🔆",
  },
];
