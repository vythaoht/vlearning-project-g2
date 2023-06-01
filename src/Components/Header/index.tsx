import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Core/Button";
import styles from "./header.module.scss";
import cls from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type Props = {
};

function Header({ }: Props) {
  const inputSearchRef = useRef("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    inputSearchRef.current = value;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/searching?query=${inputSearchRef.current}`);
  };

  const { categories } = useSelector((state: RootState) => {
    return state.courseCategoriesReducer;
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <img src="/image/logo.png" alt="#" height="76" />
        </Link>
        <div>
          <form className={styles.formContainer} onSubmit={handleSearch}>
            <input type="text" placeholder="Tìm kiếm" onChange={handleChange} />
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
              {categories.map((item) => {
                return (
                  <li key={item.maDanhMuc}>
                    <Link to="">{item.tenDanhMuc}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className={styles.listItem}>
            <Link to="">KHOÁ HỌC</Link>
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
