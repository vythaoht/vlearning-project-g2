import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Core/Button";
import styles from "./header.module.scss";
import cls from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/store";
import { logout } from "../../Redux/Slices/userSlice";

type Props = {};

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

  const handleSignin = () => {
    navigate("/login");
  };

  const { categories } = useSelector((state: RootState) => {
    return state.courseCategoriesReducer;
  });

  const { user } = useSelector((state: RootState) => {
    return state.userReducer;
  });

  const dispatch: DispatchType = useDispatch();

  const handleToLogOut = () => {
    dispatch(logout())
  };

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
                    <Link to={`/category/${item.maDanhMuc}`}>
                      {item.tenDanhMuc}
                    </Link>
                  </li>
                );
              })}
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
        {user ? (
          <div className={styles.info}>
            <p>{user.hoTen}</p>
            <img src="./image/pic7.jpg" alt="" />
            <i className="fa fa-power-off" onClick={handleToLogOut}></i>
          </div>
        ) : (
          <Button title="Đăng Nhập" onClick={handleSignin} />
        )}
      </div>
    </div>
  );
}

export default Header;
