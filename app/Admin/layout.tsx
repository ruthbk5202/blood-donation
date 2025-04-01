import React from "react";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AdminSidebar from "./components/sidebar/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("content:", children);
  return (
    <div>
      <AdminNavbar />
      <div>
      <AdminSidebar />
      <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
