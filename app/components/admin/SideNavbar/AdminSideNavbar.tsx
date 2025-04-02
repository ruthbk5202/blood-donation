"use client"

import type React from "react"
import { useState } from "react"
import {
  LayoutDashboard,
  Droplets,
  Users,
  ClipboardList,
  UserCircle,
  Globe,
  MapPin,
  Building2,
  FileText,
  Bell,
  Settings,
  LogOut,
} from "lucide-react"
import Styles from '../amin.module.css';

interface SidebarProps {
  isOpen: boolean
}

interface MenuItem {
  id: string
  title: string
  icon: React.ReactNode
  active?: boolean
}

const AdminSideNavbar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems: MenuItem[] = [
    { id: "dashboard", title: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
    { id: "blood-banks", title: "Blood Banks", icon: <Droplets size={18} /> },
    { id: "blood-donors", title: "Blood Donors", icon: <Users size={18} /> },
    { id: "blood-requests", title: "Blood Requests", icon: <ClipboardList size={18} /> },
    { id: "app-users", title: "App Users", icon: <UserCircle size={18} /> },
    { id: "countries", title: "Countries", icon: <Globe size={18} /> },
    { id: "states", title: "States", icon: <MapPin size={18} /> },
    { id: "cities", title: "Cities", icon: <Building2 size={18} /> },
    { id: "blogs", title: "Blogs", icon: <FileText size={18} /> },
    { id: "notifications", title: "Notifications", icon: <Bell size={18} /> },
    { id: "settings", title: "Settings", icon: <Settings size={18} /> },
  ]

  const handleMenuClick = (id: string) => {
    setActiveItem(id)
  }

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="user-info">
        <div className="user-avatar">
          <UserCircle size={32} />
        </div>
        <div className="user-details">
          <span className="user-role">admin</span>
        </div>
      </div>

      <nav className="sidebar-menu">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeItem === item.id ? "active" : ""}`}
              onClick={() => handleMenuClick(item.id)}
            >
              <a href="#" className="menu-link">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-text">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="misc-label">MISCELLANEOUS</div>
        <ul>
          <li className="menu-item">
            <a href="#" className="menu-link">
              <span className="menu-icon">
                <LogOut size={18} />
              </span>
              <span className="menu-text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default AdminSideNavbar;

