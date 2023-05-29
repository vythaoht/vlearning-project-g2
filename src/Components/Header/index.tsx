import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Core/Button";
import styles from "./header.module.scss";

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
          <li>
            <i className="fa fa-list-ul"></i>
            <p>
              <Link to="/">DANH MỤC</Link>
            </p>
          </li>
          <li>
            <Link to="/event">KHOÁ HỌC</Link>
          </li>
          <li>
            <Link to="/event">SỰ KIỆN</Link>
          </li>
          <li>
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
