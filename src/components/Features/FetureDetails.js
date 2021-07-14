import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FeatureDetails.css';
const FetureDetails = ({feature}) => {
    
    return (
        <div className="container col-lg-3 col-md-6">
            <div className="card">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <FontAwesomeIcon className = "icons-style" icon={feature.icon} />
                     <h2> 0{feature.id}</h2>
                     <h3>{feature.title}</h3>
                     <p>{feature.subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default FetureDetails;