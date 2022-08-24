export type ShopItem = {
  id: string;
  name: string;
  thumbnail: string;
  price: {
    selling_price: number;
    original_price: number;
    discounted: boolean;
    discount_percentage: number;
    discount_amount: number;
  };
  tags: [
    {
      id: string;
      name: string;
      color: string;
      tag_group: string;
    },
  ];
  campaigns: [
    {
      id: string;
      name: string;
      thumbnail: string;
    },
  ];
  categories: [
    {
      id: string;
      name: string;
      thumbnail: string;
    },
  ];
};

export type ShopItemDetail = ShopItem & {
  details: [
    {
      header: string;
      content: string;
    },
  ];
  images: string[];
  related_shop_items: ShopItem[];
};
