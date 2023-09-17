import { auth } from '@clerk/nextjs';

import CartClient from './cart-client';

export const revalidate = 0;

const CartPage = () => {
  const { userId } = auth();
  return (
    <CartClient userId={userId} />
  )
};

export default CartPage;