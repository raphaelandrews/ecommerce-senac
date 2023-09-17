import { supabaseClient } from '@/utils/supabaseClient';
import { Product } from "@/types";

interface Query {
    categoryId?: string;
  }

export const getProductsByCategory = async (query: Query): Promise<Product[]> => {
  const supabase = supabaseClient();

  const { categoryId } = query;
  
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      categories(name)
    `)
    .eq('category_id', categoryId);;

  if (error) {
    console.error('Error fetching products:', error);
  }

  return data || [];
}