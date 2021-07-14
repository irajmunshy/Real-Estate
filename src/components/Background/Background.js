import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Background.css';
const Background = () => {
    return (
        <div className="mainDiv">
            <div className='div d-flex justify-content-center'>
                <div className='textDiv'>
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faHome} />
                        <h6>Real Estate Agency</h6>
                    </div>
                    <h1 className="headerText">FIND YOUR DREAM <br /> HOUSE BY US</h1>
                </div>
            </div>
            <div className="container">
                <div className="borderShadow">
                    <select id="inputState">
                        <option selected>Choose Area</option>
                        <option>Chicago</option>
                        <option>London</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                    <select id="inputState">
                        <option selected>Property Status</option>
                        <option>Opne House</option>
                        <option>Rent</option>
                        <option>Sale</option>
                        <option>Sold</option>
                        
                    </select>
                    <select id="inputState">
                        <option selected>Property Type</option>
                        <option>Appartment</option>
                        <option>Co-op</option>
                        <option>Condo</option>
                        <option>Single Family Home</option>
                    </select>
                    <button className="buttonStyle">FIND NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Background;