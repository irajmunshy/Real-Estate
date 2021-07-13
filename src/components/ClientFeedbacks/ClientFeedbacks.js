import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ClientFeedbacks.css';

const ClientFeedbacks = () => {
    return (
        <div className="feedback-area my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6 className="clientTitle">Testimonials</h6>
                                <h1>Clients Feedbacks</h1>
                            </div>

                            <div>
                                <a href="/"><FontAwesomeIcon icon={faArrowLeft} /></a>
                                <a href="/"><FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ClientFeedbacks;