import { supabaseClient } from '@/utils/supabaseClient';
import { Category } from "@/types";

interface Query {
  categoryId?: string;
}

export const getCategory = async (query: Query) => {
  const supabase = supabaseClient();

  const { categoryId } = query;

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('id', categoryId);
  if (error) {
    console.error('Error fetching category:', error);
  }

  if (data) {
    return data[0];
  } else {
    return [];
  }
}