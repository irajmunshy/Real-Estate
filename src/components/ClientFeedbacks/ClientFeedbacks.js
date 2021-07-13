import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ClientFeedbacks.css';

const ClientFeedbacks = () => {
    return (
        <div className="feedback-area">
            <div className="container">
                <div className="row mx-4">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between">
                            <div className="">
                                <h6 className="client-SubTitle">Testimonials</h6>
                                <h1 className="clientTitle">Clients Feedbacks</h1>
                            </div>

                            <div className="mt-5">
                                <a href="" className="leftArrow"><FontAwesomeIcon icon={faArrowLeft} /></a>
                                <a href="" className="rightArrow"><FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ClientFeedbacks;