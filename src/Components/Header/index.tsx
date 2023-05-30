import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Core/Button";
import styles from "./header.module.scss";
import cls from "classnames";

type Props = {};

function Header({ }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src="/image/logo.png" alt="#" height="76" />
        </Link>
        <div>
          <form className={styles.formContainer}>
            <input type="text" placeholder="Tìm kiếm" />
            <i className="fa fa-search"></i>
          </form>
        </div>
      </div>

      <div className={styles.between}>
        <ul className={styles.options}>
          <li className={cls(styles.firstOfList, styles.listItem)}>
            <i className="fa fa-list-ul"></i>
            <p>
              <Link to="/">DANH MỤC</Link>
            </p>
            <ul className={styles.listingOfFistOption}>
              <li>
                <Link to="/category/programbackend">LẬP TRÌNH BACK END</Link>
              </li>
              <li>
                <Link to="/category/webdesign">THIẾT KẾ WEB</Link>
              </li>
              <li>
                <Link to="/category/programmobile">LẬP TRÌNH DI ĐỘNG</Link>
              </li>
              <li>
                <Link to="/category/programfrontend">LẬP TRÌNH FRONT END</Link>
              </li>
              <li>
                <Link to="/category/programfullstack">LẬP TRÌNH FULL STACK</Link>
              </li>
              <li>
                <Link to="/category/thinkingprogram">TƯ DUY LẬP TRÌNH</Link>
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <Link to="/course">KHOÁ HỌC</Link>
          </li>

          <li className={styles.listItem}>
            <Link to="/loading">SỰ KIỆN</Link>
          </li>

          <li className={styles.listItem}>
            <Link to="/information">THÔNG TIN</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <Button title="Đăng Nhập" />
      </div>
    </div>
  );
}

export default Header;