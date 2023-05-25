import React from "react";
import Button from "../../Core/Button";
import styles from "./header.module.scss";

type Props = {};

function Header({ }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a>
          <img src="/image/logo.png" alt="#" height="76" />
        </a>
        <div>
          <form className={styles.formContainer}>
            <input type="text" placeholder="Tìm kiếm" />
            <i className="fa fa-search"></i>
          </form>
        </div>
      </div>

      <div className={styles.between}>
        <ul className={styles.options}>
          <li>
            <i className="fa fa-list-ul"></i>
            <p>DANH MỤC</p>
          </li>
          <li>KHOÁ HỌC</li>
          <li>BLOG</li>
          <li>SỰ KIỆN</li>
          <li>THÔNG TIN</li>
        </ul>
      </div>

      <div className={styles.right}>
        <Button title="Đăng Nhập" />
      </div>
    </div >
  );
}

export default Header;
