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
