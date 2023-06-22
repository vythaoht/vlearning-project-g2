import React, { useEffect } from "react";
import styles from "./courseDetailsPage.module.scss";
import cls from "classnames";
import Card from "../../Core/Card";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/store";
import { fetchCourseInfoAction } from "../../Redux/Slices/courseInfoSlice";
import { fetchCourseCategoriesByIdAction } from "../../Redux/Slices/courseCategoriesByIdSlice";
import {
    courseRegistrationPayload,
    courseRegistrationRequest,
} from "../../Redux/Services/courseRegistration";
import { toast } from "react-toastify";
import useScrollTop from "../../hooks/useScrollTop";

type Props = {};

function CourseDetailsPage({ }: Props) {
    const { maKhoaHoc = '' } = useParams();

    const { courseInfo } = useSelector(
        (state: RootState) => state.courseInfoReducer
    );

    const fetchCourseRegistration = async (values: courseRegistrationPayload) => {
        try {
            await courseRegistrationRequest(values);
            toast.success("Ghi danh thành công")
        } catch (error: any) {
            toast.error(error.response.data);
        }
    };

    const dispatch: DispatchType = useDispatch();
    useScrollTop()

    useEffect(() => {
        if (maKhoaHoc) {
            dispatch(fetchCourseInfoAction(maKhoaHoc));
        }
    }, [maKhoaHoc]);

    const { courses } = useSelector(
        (state: RootState) => state.courseCategoriesByIdReducer
    );
    const { user } = useSelector((state: RootState) => {
        return state.userReducer
    })

    const cateroryId = courseInfo?.danhMucKhoaHoc.maDanhMucKhoahoc;

    useEffect(() => {
        if (cateroryId) {
            dispatch(fetchCourseCategoriesByIdAction(cateroryId));
        }
    }, [cateroryId]);

    return (
        <section className={styles.courserDetails}>
            <div className={styles.courserDetails__title}>
                <h3>THÔNG TIN KHÓA HỌC</h3>
                <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
            </div>

            <div className={styles.courserDetails__content}>
                <div className={styles.row}>
                    <div className={styles.courserDetails__left}>
                        <h4>Kotlin Trên Android</h4>

                        <div className={styles.contentLeft__header}>
                            <div className={styles.contentLeft__info}>
                                <div className={styles.contentLeft__img}>
                                    <img src="/image/one.jpg" alt="" />
                                </div>

                                <div className={styles.contentLeft__intro}>
                                    <p>Giảng viên</p>
                                    <p>Robert Ngô Ngọc</p>
                                </div>
                            </div>
                            <div className={styles.contentLeft__info}>
                                <div className={styles.contentLeft__img}>
                                    <i className="fas fa-graduation-cap"></i>
                                </div>

                                <div className={styles.contentLeft__intro}>
                                    <p>Lĩnh vực</p>
                                    <p>{courseInfo?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                                </div>
                            </div>
                            <div className={styles.contentLeft__info}>
                                <div className={styles.contentLeft__review}>
                                    <span>
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star-half-alt" />
                                        <i className="far fa-star" />
                                        3.5
                                    </span>
                                    <p>100 đánh giá</p>
                                </div>
                            </div>
                        </div>

                        <p className={styles.contentLeft__des}>
                            React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                            dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
                            đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
                            cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
                            lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
                            niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
                            bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
                            trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
                            tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
                            không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
                            số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
                            nghệ quan trọng với tư cách là một nhà phát triển web và trong
                            khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
                            trọng!
                        </p>

                        <div className={styles.contentLeft__courseLearn}>
                            <h6>Những gì bạn sẽ học</h6>

                            <div className="row">
                                <div className={cls("col-6", styles.contentLeft__padding)}>
                                    <ul>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                                                thiện với người dùng và phản ứng nhanh
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Đăng ký công việc được trả lương cao hoặc làm freelancer
                                                trong một trong những lĩnh vực được yêu cầu nhiều nhất
                                                mà bạn có thể tìm thấy trong web dev ngay bây giờ
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                                                dụng sức mạnh của JavaScript một cách dễ dàng
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Tìm hiểu tất cả về React Hooks và React Components
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={cls("col-6", styles.contentLeft__padding)}>
                                    <ul>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                                                Javascript NPM, Webpack, Babel và ES6 / ES2015
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                                                kết hợp
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                                                người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fas fa-check" />
                                            <a href="">
                                                Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                                                ứng dụng Redux
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contentLeft__course}>
                            <h6>Nội dung khóa học</h6>

                            {/* Mục 1: giới thiệu  */}
                            <div className={styles.courseDetails__item}>
                                <div className={styles.courseDetails__content}>
                                    <div className={styles.courseContent__header}>
                                        <span>MỤC 1: GIỚI THIỆU</span>
                                        <button className={styles.courseContent__button}>
                                            Xem trước
                                        </button>
                                    </div>

                                    <p>Bài học</p>

                                    <div className={styles.courseContent__lesson}>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Các khái niệm về React Component
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Thiết lập môi trường cho Windows
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Tạo ứng dụng React - React-Scripts
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mục 2: kiến thức căn bản */}
                            <div className={styles.courseDetails__item}>
                                <div className={styles.courseDetails__content}>
                                    <div className={styles.courseContent__header}>
                                        <span>MỤC 2: KIẾN THỨC CĂN BẢN</span>
                                        <button className={styles.courseContent__button}>
                                            Xem trước
                                        </button>
                                    </div>

                                    <p>Bài học</p>

                                    <div className={styles.courseContent__lesson}>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Trang chủ và thành phần thư mục
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Hướng dẫn khóa học + Liên kết Github
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Trang chủ thương mại điện tử + thiết lập SASS
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Tệp CSS và SCSS
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                React 17: Cập nhật các gói + Phiên bản React mới nhất
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mục 3: kiến thức chuyên sâu */}
                            <div className={styles.courseDetails__item}>
                                <div className={styles.courseDetails__content}>
                                    <div className={styles.courseContent__header}>
                                        <span>MỤC 3: KIẾN THỨC CHUYÊN SÂU </span>
                                        <button className={styles.courseContent__button}>
                                            Xem trước
                                        </button>
                                    </div>

                                    <p>Bài học</p>

                                    <div className={styles.courseContent__lesson}>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                connect() and mapStateToProps
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Trạng thái thư mục vào Redux
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                        <div
                                            className={cls(
                                                "mt-1",
                                                styles.courseContent__lessonContent
                                            )}
                                        >
                                            <span>
                                                <i className="fas fa-play-circle" />
                                                Thành phần Tổng quan về Bộ sưu tập
                                            </span>
                                            <span>
                                                <i className="fas fa-clock" />
                                                14:35
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.courserDetails__right}>
                        <div className={styles.content__right}>
                            <div className={styles.content__rightBox}>
                                <img src={courseInfo?.hinhAnh} alt={courseInfo?.maKhoaHoc} />
                                <div className={styles.content__price}>
                                    <p>
                                        <i className="fas fa-bolt" />
                                        500.000
                                        <sup>đ</sup>
                                    </p>
                                </div>

                                <button
                                    className={styles.content__rightButton}
                                    onClick={() => fetchCourseRegistration({
                                        taiKhoan: user?.taiKhoan || "",
                                        maKhoaHoc: maKhoaHoc,
                                    })}
                                >
                                    Đăng ký
                                </button>

                                <div className={styles.content__rightInfo}>
                                    <ul>
                                        <li>
                                            <p>
                                                Ghi danh:
                                                <span> 10 học viên</span>
                                            </p>
                                            <i className="fas fa-user-graduate " />
                                        </li>
                                        <li>
                                            <p>
                                                Thời gian:
                                                <span> 18 giờ</span>
                                            </p>
                                            <i className="far fa-clock far fa-calendar-alt" />
                                        </li>
                                        <li>
                                            <p>
                                                Bài học:
                                                <span> 10</span>
                                            </p>
                                            <i className="fas fa-book" />
                                        </li>
                                        <li>
                                            <p>
                                                Video:
                                                <span> 14</span>
                                            </p>
                                            <i className="fas fa-photo-video" />
                                        </li>
                                        <li>
                                            <p>
                                                Trình độ:
                                                <span> Người mới bắt đầu</span>
                                            </p>
                                            <i className="fas fa-database" />
                                        </li>
                                    </ul>
                                    <form className={styles.form__Id}>
                                        <input type="text" placeholder="Nhập mã" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.courseExploreMore}>
                <h6>
                    <a href="">Khóa học tham khảo</a>
                </h6>

                <div className={styles.courserDetails__item}>
                    <div className={cls("row gutter")}>
                        {courses?.slice(0, 4).map((course) => {
                            return (
                                <div
                                    key={course.maKhoaHoc}
                                    className="col-6 col-4 col-3 colter"
                                >
                                    <Card course={course} isTag isShowInfoDetails />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CourseDetailsPage;
