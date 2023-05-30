
import React from 'react'
import styles from './loginPage.module.scss'

type Props = {}

function LoginPage({ }: Props) {
    // const signUpButton = document.getElementById('login');
    // const signInButton = document.getElementById('register');
    // const container = document.getElementById('container');

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });


    return (
        <div className={styles.login}>
            <div className={styles.login__formAll}>
                {/* Giao diện đăng nhập */}
                <div className={styles.container} id='container'>
                    <div className={`${styles.form__content} ${styles.login__content}`}>
                        <form className={styles.login__box}>
                            <h2>ĐĂNG NHẬP</h2>
                            <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
                            <input type="text" placeholder="Tài khoản" name="taiKhoan" />
                            <input type="password" placeholder="Mật khẩu" name="matKhau" />
                            <a href="#">Quên mật khẩu?</a>
                            <button type="submit">Đăng nhập</button>
                        </form>
                    </div>

                    {/* Giao diện đăng ký */}
                    <div className={`${styles.form__content} ${styles.register__content}`}>
                        <form className={styles.register__box}>
                            <h2 className="pt-3">ĐĂNG KÝ</h2>
                            <input type="text" placeholder="Tài khoản" name="taiKhoan" />
                            <div className="message" > </div>
                            <input type="text" placeholder="Họ tên" name="hoTen" />
                            <div className="message" ></div>
                            <input type="password" placeholder="Mật khẩu" name="matKhau" />
                            <div className="message" ></div>
                            <input type="email" placeholder="Email" name="email" />
                            <div className="message" ></div>
                            <input type="phone" placeholder="Số điện thoại" name="soDT" />
                            <div className="message" ></div>
                            <select className="maNhom">
                                <option value="GP01">GP01</option>
                                <option value="GP02">GP02</option>
                                <option value="GP03">GP03</option>
                                <option value="GP04">GP04</option>
                                <option value="GP05">GP05</option>
                                <option value="GP06">GP06</option>
                                <option value="GP07">GP07</option>
                                <option value="GP08">GP08</option>
                                <option value="GP09">GP09</option>
                                <option value="GP010">GP010</option>
                            </select>
                            <button type="submit">Đăng ký</button>
                        </form>
                    </div>

                    {/* Giao diện Xin chào */}
                    <div className={styles.overlay__container}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlay__panel} ${styles.overlay__left}`}>
                                <h1>Chào mừng bạn đã trở lại!</h1>
                                <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                                <button className={styles.overlay__button} id="login">Đăng nhập</button>
                            </div>
                            <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                                <h1>Xin chào!</h1>
                                <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
                                <button className={styles.overlay__button} id="register">Đăng ký</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage