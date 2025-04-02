"use client";
import { FiBell } from 'react-icons/fi';
import { IoReorderThreeOutline } from "react-icons/io5";
import Link from "next/link";
import styles from '../amin.module.css';

export default function AdminNavbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navLeft}>
        <button className={styles.menuBtn}>
          <IoReorderThreeOutline size={20} />
        </button>
      </div>
      <div className={styles.navCenter}>
        {/* All links should start with / */}
        <Link className={styles.navBtn} href="/admin/home">Home</Link>
        <Link className={styles.navBtn} href="/admin/settings">Settings</Link>
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