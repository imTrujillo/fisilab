import { auth } from "@clerk/nextjs/server";

const allowedIds = ["user_331rjhsBtdauXMy8ST2n3ReBCBE"];
export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return allowedIds.indexOf(userId) !== -1;
};
