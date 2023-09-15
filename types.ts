export interface Product {
  id: number;
  name: string;
  price: string;
  is_featured: boolean;
  image: string;
};

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};