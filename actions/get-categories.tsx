import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  //const res = await fetch(URL);

  return (
    [
      {
        id: "1",
        name: "Roupas"
      }
    ]
  );
};

export default getCategories;