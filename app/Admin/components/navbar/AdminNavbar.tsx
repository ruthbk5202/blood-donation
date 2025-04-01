"use client";
import {FiBell } from 'react-icons/fi';
import { IoReorderThreeOutline } from "react-icons/io5";
// import { Link } from 'react-router-dom';
import {useRouter} from "next/navigation";
import Link from "next/link";

import styles from '../admin.module.css';

export default function AdminNavbar() {
  // const router=useRouter()
  // const handlehomedashboard = () => {

  //   router.push('Admin/homedashboard');
  // };
  return (
    <header className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.menuBtn}>
          <IoReorderThreeOutline size={20} />
        </button>
      </div>
      <div className={styles.navCenter}>
        <Link className={styles.navBtn} href="/admin/home">Home</Link>
      {/* <button className={styles.navBtn}>Settings</button> */}
      <Link href="admin/settings">Settings</Link>
        <button className={styles.navBtn}>Download Demo APK</button>
        <button className={styles.navBtn}>Read Documentation</button>
      </div>
      <div className={styles.navRight}>
        <button className={styles.notificationBtn}>
          <FiBell size={20} />
          <span className={styles.badge}>3</span>
        </button>
      </div>
    </header>
  );
}