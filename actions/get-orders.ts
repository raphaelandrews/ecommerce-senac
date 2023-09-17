import { supabaseClient } from '@/utils/supabaseClient';
import { Category } from "@/types";

interface Query {
  userId?: string | null;
}

export const getOrders = async (query: Query) => {
  const supabase = supabaseClient();

  const { userId } = query;

  const { data, error } = await supabase
    .from('orders')
    .select('id, OrderId: id (order_id, product_id(name), price)')
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching category:', error);
  }

    return data || [];
}