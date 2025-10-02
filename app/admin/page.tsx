import { getIsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

const AdminPage = async () => {
  const isAdmin = await getIsAdmin();

  if (!isAdmin) {
    redirect("/");
  }

  return <AdminClient />;
};

export default AdminPage;
