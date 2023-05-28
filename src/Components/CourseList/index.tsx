import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Core/Card";
import styles from "./courseList.module.scss";

type Props = {};

function CourseList({ }: Props) {
    return (
        <div className={styles.container}>
            <p>
                <Link to="#">Khoá học phổ biến</Link>
            </p>
            <div className="row gutter">
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
            </div>

            <p>
                <Link to="#">Khoá học tham khảo</Link>
            </p>
            <div className="row gutter">
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
            </div>

            <p>
                <Link to="#">Khoá học Front End React JS</Link>
            </p>
            <div className="row gutter">
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
                <div className="col-3 colter">
                    <Card />
                </div>
            </div>
        </div>


    );
}

export default CourseList;
