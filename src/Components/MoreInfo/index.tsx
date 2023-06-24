import React from 'react'
import styles from "./moreInfo.module.scss"
import cls from "classnames"

type Props = {}

function MoreInfo({ }: Props) {
    return (
        <>
            <div className={cls("row", styles.container)}>
                <div className={cls("col-6", styles.left)}>
                    <h2>V LEARNING ?</h2>
                    <h1>Nơi hội tụ kiến thức</h1>
                    <p className={styles.letter}>Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.</p>
                    <div className="styles.clear"></div>
                </div>
                <div className={cls("col-6", styles.right)}>
                    <img src="./image/laptop.png" alt="#" />
                </div>
            </div>

            <div className={cls("row", styles.container, styles.reverse)}>
                <div className={cls("col-6", styles.right)}>
                    <img src="./image/edu.png" alt="#"
                        loading="lazy"
                    />
                </div>
                <div className={cls("col-6", styles.left)}>
                    <h2>CHƯƠNG TRÌNH HỌC V LEARNING</h2>
                    <h1>Hệ thống học hàng đầu</h1>
                    <p className={styles.letter}>Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.</p>
                    <div className="styles.clear"></div>
                </div>

            </div>

            <div className={cls("row", styles.container)}>
                <div className={cls("col-6", styles.left)}>
                    <h2>TẦM NHÌN V LEARNING</h2>
                    <h1>Đào tạo lập trình chuyên sâu</h1>
                    <p className={styles.letter}>Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.</p>
                    <div className="styles.clear"></div>
                </div>
                <div className={cls("col-6", styles.right)}>
                    <img src="./image/study.png" alt="#"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className={cls("row", styles.container, styles.reverse)}>
                <div className={cls("col-6", styles.right)}>
                    <img src="./image/student.png" alt="#"
                        loading="lazy"
                    />
                </div>
                <div className={cls("col-6", styles.left)}>
                    <h2>SỨ MỆNH V LEARNING</h2>
                    <h1>Phương pháp đào tạo hiện đại</h1>
                    <p className={styles.letter}>Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.</p>
                    <div className="styles.clear"></div>
                </div>
            </div>
        </>


    )
}

export default MoreInfo