import React from 'react';
import b1 from '../../images/brandLogo/b1.png';
import b2 from '../../images/brandLogo/b2.png';
import b3 from '../../images/brandLogo/b3.png';
import b4 from '../../images/brandLogo/b4.png';
import b5 from '../../images/brandLogo/b5.png';
import './BrandArea.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const BrandArea = () => {
    return (
        <div className="my-5">
            <div className="brandImage-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="image-area">
                                <Link to="" > <FontAwesomeIcon icon={faPlay} /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brand-area">
                <div className="container-fluid">
                    <div className="d-flex justify-content-evenly">
                        <div className="icon">
                            <img src={b1} alt="" />
                        </div>
                        <div className="icon">
                            <img src={b2} alt="" />
                        </div>
                        <div className="icon">
                            <img src={b3} alt="" />
                        </div>
                        <div className="icon">
                            <img src={b4} alt="" />
                        </div>
                        <div className="icon">
                            <img src={b5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandArea;