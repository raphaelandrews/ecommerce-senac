import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  /*
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);*/

  return (
    [
      {
        id: "1",
        category: {
          id: "1",
          name: "Camisa"
        },
        name: "Roupa",
        price: "10.99",
        isFeatured: true,
        size: {
          id: "1",
          name: "1",
          value: "1",
        },
        color: {
          id: "1",
          name: "1",
          value: "1",
        },
        images: [
          {
            id: "1",
            url: "/1",
          }
        ]
      }
    ]
  );
};

export default getProducts;