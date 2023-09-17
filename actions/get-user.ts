import { auth } from '@clerk/nextjs';

export const getUser = async () => {
  const { userId } = auth();

  return userId;
}