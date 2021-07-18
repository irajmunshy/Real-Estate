import React from 'react';
import { Link } from 'react-router-dom';
import './AnyQuestion.css';

const AnyQuestion = () => {
    return (
        <div className="anyQuestion-area mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="anyQuestion-info">
                            <h6 className="anySubTitle text-center">// any question you have //</h6>
                            <h1 className="anyTitle text-center">897-876-987-90</h1>

                            <div className="mt-5 text-center">
                                <Link to="" className="callBtn explorebtn me-2">Make a Call</Link>
                                <Link to="" className="contactBtn explorebtn ms-2">Contact US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnyQuestion;