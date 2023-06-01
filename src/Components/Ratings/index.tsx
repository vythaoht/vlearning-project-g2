import React from 'react'
import OneOfListRating from '../OneOfListRating'
import styles from "./ratings.module.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
type Props = {}

function Ratings({ }: Props) {
    return (
        <div>
            <p className={styles.title}>
                <Link to="#">Giảng viên hàng đầu</Link>
            </p>
            <Swiper
                modules={[Pagination]}
                className="mySwiper"
                slidesPerView={6}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                wrapperClass={styles.pagination}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 6
                    }
                }}
            // centeredSlides={true}
            >
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/one.jpg'
                        name="Big DadMoon"
                        skill="Chuyên gia lĩnh vực lập trình"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/two.jpg'
                        name="IcarDi MenBor"
                        skill="Chuyên gia ngôn ngữ Vue Js"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/three.jpg'
                        name="Bladin Slaham"
                        skill="Chuyên gia hệ thống máy tính"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/four.jpg'
                        name="Chris Andersan"
                        skill="Chuyên gia lĩnh vực Full Skill"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/five.jpg'
                        name="VueLo Gadi"
                        skill="Chuyên gia lĩnh vực phân tích"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/six.jpg'
                        name="Hoàng Nam"
                        skill="Chuyên gia lĩnh vực ngành PHP"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OneOfListRating
                        image='./image/one.jpg'
                        name="David Ngô Savani"
                        skill="Chuyên gia lĩnh vực Front End"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Ratings