import { auth } from '@clerk/nextjs';

import OrdersClient from './orders-client';

export const revalidate = 0;

const Orders = () => {
  const { userId } = auth();
  return (
    <OrdersClient userId={userId} />
  )
};

export default Orders;