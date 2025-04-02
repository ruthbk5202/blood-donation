"use client";
import type { ReactNode } from "react";
import React, { Children, useState } from 'react';
import AdminNavbar from "../components/admin/Navbar/AdminNavbar";
import AdminSideNavbar from "../components/admin/SideNavbar/AdminSideNavbar";
interface AdminLayoutProps {
  children: ReactNode
}
const AdminLayout =({children}:AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // or true if you want it open by default

  return (
    <div>
      <AdminNavbar />
      <AdminSideNavbar isOpen={isSidebarOpen} />
       {children}
    </div>
  )
};

export default AdminLayout;