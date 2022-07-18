import React from "react";
import styles from "./Header.module.css";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import {
  IoMdContact,
  IoMdChatboxes,
  IoIosNotifications,
  IoIosMore,
} from "react-icons/io";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.navHeader}>
          <div className={styles.logo}>
            <a href="/">
              <img src="https://static.chotot.com/storage/marketplace/transparent_logo.png"></img>
            </a>
          </div>
          <div className={styles.navBar}>
            <div className={styles.navItem}>
              <a href="/">
                <FaHome />
                <span>Trang chủ</span>
              </a>
            </div>
            <div className={styles.navItem}>
              <a href="/">
                <IoMdContact />
                <span>Quản lý tin</span>
              </a>
            </div>
            <div className={styles.navItem}>
              <a href="/">
                <FaShoppingCart />
                <span>Đơn hàng</span>
              </a>
            </div>
            <div className={styles.navItem}>
              <a href="/">
                <IoMdChatboxes />
                <span>Chat</span>
              </a>
            </div>
            <div className={styles.navItem}>
              <a href="/">
                <IoIosNotifications />
                <span>Thông báo</span>
              </a>
            </div>
            <div className={styles.navItem}>
              <a href="/">
                <IoIosMore />
                <span>Thêm</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
