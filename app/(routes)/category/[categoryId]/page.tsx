'use client'

import React, { useEffect, useState } from 'react';
import { Product, Category } from "@/types";
import Container from '@/components/ui/container';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

import { getProductsByCategory } from "@/actions/get-products-by-category";
import getCategory from '@/actions/get-category';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await getProductsByCategory({
          categoryId: params.categoryId,
        });
        const categoryData = await getCategory(params.categoryId);
        setProducts(productsData);
        setCategory(categoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [params.categoryId]);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              {/* Conteúdo relacionado à categoria, se necessário */}
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
