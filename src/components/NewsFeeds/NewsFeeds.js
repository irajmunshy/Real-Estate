import React from 'react';
import './NewsFeeds.css';
import Slider from "react-slick";
import n1 from '../../images/newsFeeds/1.jpg';
import n2 from '../../images/newsFeeds/2.jpg';
import n3 from '../../images/newsFeeds/3.jpg';
import n4 from '../../images/newsFeeds/4.jpg';
import n5 from '../../images/newsFeeds/5.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faTags } from '@fortawesome/free-solid-svg-icons';

const newsFeeds = [
    {
        img: n1,
        title: '10 Brilliant Ways To Decorate Your Home',
        blog: {
            author: 'Admin',
            tags: 'Decorate',
        },
        date: 'June 24, 2021',
    },
    {
        img: n2,
        title: 'The Most Inspiring Interior Design Of 2021',
        blog: {
            author: 'Admin',
            tags: 'Interior',
        },
        date: 'July 23, 2021',
    },
    {
        img: n3,
        title: 'Recent Commercial Real Estate Transactions',
        blog: {
            author: 'Admin',
            tags: 'Estate',
        },
        date: 'May 22, 2021',
    },
    {
        img: n4,
        title: 'Renovating a Living Room? Experts Share Their Secrets',
        blog: {
            author: 'Admin',
            tags: 'Room',
        },
        date: 'June 24, 2021',
    },
    {
        img: n5,
        title: '7 home trends that will shape your house in 2021',
        blog: {
            author: 'Admin',
            tags: 'Trends',
        },
        date: 'June 24, 2021',
    },
];

const NewsFeeds = () => {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
            console.log(props)
            return (
              <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
              />
            );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "#FF5A3C", color: "#fff" }}
            onClick={onClick}
          />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="newsFeeds-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="feedHeader text-center">
                            <h6>News & Blogs</h6>
                            <h1>Leatest News Feeds</h1>
                        </div>
                    </div>
                </div>

                <div className="row mx-5">
                    <Slider {...settings}>
                        {
                            newsFeeds.map(news =>
                                <div className="col-md-4">
                                    <div className="newsFeeds-container">
                                        <div className="imgArea">
                                            <img src={news.img} className="img-fluid" alt="" />
                                        </div>

                                        <div className="brief">
                                            <div className="briefHeader">
                                                <div className="adminArea">
                                                    <Link to="/" className="me-5">
                                                        <FontAwesomeIcon icon={faUser} /> <span>by: Admin</span>
                                                    </Link>

                                                    <Link to="/">
                                                        <FontAwesomeIcon icon={faTags} /> <span>{news.blog.tags}</span>
                                                    </Link>
                                                </div>

                                                <Link to="">
                                                    <h3>{news.title}</h3>
                                                </Link>
                                            </div>

                                            <div className="d-flex mt-4 justify-content-between">
                                                <p>
                                                    <FontAwesomeIcon icon={faCalendarAlt} />  <span>{news.date}</span>
                                                </p>

                                                <Link className="readMoreBtn" to="">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default NewsFeeds;