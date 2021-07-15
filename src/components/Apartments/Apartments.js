import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import a1 from '../../images/apartments/a1.jpg';
import a2 from '../../images/apartments/a2.jpg';
import a3 from '../../images/apartments/a3.jpg';
import a4 from '../../images/apartments/a4.jpg';
import './Apartments.css';

const apartments = [
    {
        img: a1,
        title: 'Queens ',
        subTitle: 'Friendly neighborhood',
    },
    {
        img: a2,
        title: 'Greenville',
        subTitle: 'The perfect city',
    },
    {
        img: a3,
        title: 'Manhattan',
        subTitle: 'Heart of NYC',
    },
    {
        img: a2,
        title: 'Upper East Side',
        subTitle: 'The luxury crib',
    },
    {
        img: a4,
        title: 'Jersey City',
        subTitle: 'The Best City',
    },
];

const Apartments = () => {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
            console.log(props)
            return (
              <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
              />
            );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#FF5A3C", color: "#fff" }}
            onClick={onClick}
          />
        );
    }
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="apartment-area">
            <div>
                <Slider {...settings}>
                    {
                        apartments.map(apartment =>   
                            <div className="apartmentInfo">
                                <Link to="">
                                    <img className="img-fluid" src={apartment.img} alt="" />
                                </Link>

                                <div className="toggle">
                                    <div className="apartmentMore">
                                        <div className="detail">
                                            <h6>{apartment.subTitle}</h6>
                                            <h1>{apartment.title}</h1>
                                        </div>

                                        <div className="btn-wrapper">
                                            <Link className="" to="">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Apartments;