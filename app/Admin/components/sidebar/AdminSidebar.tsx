import Link from 'next/link';
import { 
  FiHome, 
  FiDroplet, 
  FiUsers, 
  FiCalendar,
  FiSettings 
} from 'react-icons/fi';
import { VscRequestChanges } from "react-icons/vsc";
import { TbUsersGroup } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import styles from '../admin.module.css';

export default function AdminSidebar() {
  const navItems = [
    { icon: <FiHome size={20} />, label: "Dashboard", href: "/admin" },
    { icon: <FiDroplet size={20} />, label: "Blood Banks", href: "/admin/bloodbanks" },
    { icon: <FiUsers size={20} />, label: "Blood Donors", href: "/admin/blooddonors" },
    { icon: <VscRequestChanges size={20} />, label: "Blood Request", href: "/admin/bloodrequest" },
    { icon: <TbUsersGroup size={20} />, label: "App Users", href: "/admin/appusers" },
    { icon: <FaTreeCity size={20} />, label: "City", href: "/admin/city" },
    { icon: <FaMapMarkedAlt size={20} />, label: "Province", href: "/admin/province" },
    { icon: <TbLogs size={20} />, label: "Blogs", href: "/admin/blogs" },
    { icon: <IoIosNotificationsOutline size={20} />, label: "Notification", href: "/admin/notification" },
    { icon: <FiSettings size={20} />, label: "Settings", href: "/admin/settings" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>BloodLink</h2>
      </div>
      
      <nav className={styles.sidebarNav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={styles.navItem}>
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}