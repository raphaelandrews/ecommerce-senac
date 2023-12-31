export interface Product {
  id: number;
  name: string;
  price: string;
  is_featured: boolean;
  image: string;
  categories: Category;
};

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
};

export interface Orders {
  id: string;
  user_id: string;
}
export interface OrderToItem {
  order_id: string;
  product_id: number;
  price: string;
}
