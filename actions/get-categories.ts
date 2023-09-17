import { supabaseClient } from '@/utils/supabaseClient';

export const getCategories = async () => {
  const supabase = supabaseClient();

  const { data, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Error fetching categories:', error);
  }

  return data || [];
};
