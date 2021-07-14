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
                            <h6 className="anySubTitle">// any question you have //</h6>
                            <h1 className="anyTitle">897-876-987-90</h1>

                            <div className="mt-5">
                                <Link to="" className="callBtn me-2"><span></span>Make a Call</Link>
                                <Link to="" className="contactBtn ms-2"><span></span>Contact US</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnyQuestion;