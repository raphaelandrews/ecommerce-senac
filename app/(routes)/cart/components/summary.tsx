"use client";

import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import { supabaseClientAuth } from '@/utils/supabaseClient';
import { useAuth } from '@clerk/clerk-react';

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Orders } from "@/types";

interface CartClientProps {
  userId: string | null;
}

const Summary = ({ userId }: CartClientProps) => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const { getToken } = useAuth();

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    try {
      const supabaseAccessToken = await getToken({ template: 'supabase' });
      const supabase = await supabaseClientAuth(supabaseAccessToken);

      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: userId,
        })
        .select();

      if (orderError) {
        console.error(orderError);
        return toast.error('Error creating the order.');
      }

      const orderId = orderData as unknown as Orders;

      if (orderId != null) { 
          items.map(async (cartItem) => {
            const { data, error } = await supabase
              .from('order_to_item')
              .insert({
                  order_id: orderId[0].id,
                  product_id: cartItem.id,
                  price: cartItem.price
                })

            return { data, error };
          })
      }

      toast.success('Order placed successfully.');
    } catch (e) {
      console.error(e);
      toast.error('An unexpected error occurred.');
    }
  };



  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}

export default Summary;