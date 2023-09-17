'use client'

import React, { useEffect, useState } from 'react';
import { Product, Category } from "@/types";
import Container from '@/components/ui/container';

import { getProductsByCategory } from "@/actions/get-products-by-category";
import { getCategory } from '@/actions/get-category';
import ProductList from '@/components/product-list';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProductsByCategory({
          categoryId: params.categoryId,
        });

        const categoryData = await getCategory({ categoryId: params.categoryId });
        setProducts(productsData);
        setCategory(categoryData.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [params.categoryId]);

  return (
    <div className="bg-white">
      <Container>
        <div className="space-y-10 py-10">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title={category} items={products} />
          </div>
        </div>
      </Container>
    </div >
  );
};

export default CategoryPage;
