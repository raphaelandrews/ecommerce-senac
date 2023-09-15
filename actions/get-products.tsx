import { supabaseClient } from '@/utils/supabaseClient';

export const getProducts = async () => {
  const supabase = supabaseClient();

  const { data, error } = await supabase
    .from('product')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
  }

  return data || [];
}