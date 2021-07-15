import { faArrowLeft, faArrowRight, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ClientFeedbacks.css';
import Slider from "react-slick";
import c1 from '../../images/clientFeedbacks/1.jpg';
import c2 from '../../images/clientFeedbacks/2.jpg';
import c3 from '../../images/clientFeedbacks/3.jpg';
import c4 from '../../images/clientFeedbacks/4.jpg';
import c5 from '../../images/clientFeedbacks/5.jpg';
import author from '../../images/clientFeedbacks/author.jpg';

const feedbacks = [
    {
        img: c1,
        description: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
        author: {
            img: author,
            name: 'Liam Mason',
            title: 'Office',
        },
    },
    {
        img: c2,
        description: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
        author: {
            img: author,
            name: 'Noah Alexander',
            title: 'Professor',
        },
    },
    {
        img: c3,
        description: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
        author: {
            img: author,
            name: 'Jacob William',
            title: 'Founder, Browni Co.',
        },
    },
    {
        img: c4,
        description: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
        author: {
            img: author,
            name: 'Ethan James',
            title: 'Admin',
        },
    },
    {
        img: c5,
        description: 'Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.',
        author: {
            img: author,
            name: 'Jacob William',
            title: 'Founder, Browni Co.',
        },
    },
];

const ClientFeedbacks = () => {
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
        <div className="feedback-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex pb-3 px-3 justify-content-between">
                            <div className="">
                                <h6 className="client-SubTitle">Testimonials</h6>
                                <h1 className="clientTitle">Clients Feedbacks</h1>
                            </div>

                            <div className="mt-5">
                                <button className="leftArrow" > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                                <button className="rightArrow"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div> 

                        <div className="mt-5">
                            <Slider {...settings}>
                                {
                                    feedbacks.map(feed =>
                                        <div className="clientSlider-container px-3">
                                            <img src={feed.img} className="img-fluid" alt="" />

                                            <div className="clientInfo">
                                                <p className="description">{feed.description}</p>

                                                <div className="d-flex">
                                                    <img src={feed.author.img} alt="" />

                                                    <div className="authorInfo">
                                                        <h4>{feed.author.name}</h4>
                                                        <h6>{feed.author.title}</h6>
                                                    </div>

                                                    <div>
                                                        <FontAwesomeIcon icon={faComments} /> 
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
            </div>
        </div>
        
    );
};

export default ClientFeedbacks;

