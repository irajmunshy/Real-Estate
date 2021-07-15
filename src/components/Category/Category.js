import React from 'react';
import Apartment from '../../images/apartment1.jpg';
import condor from '../../images/condor.jpg';
import house from '../../images/house.jpg';
import room from '../../images/retails.jpg';
import './Category.css';
const Category = () => {
    return (
        <div className="CategoryDiv">
            <div className="text-center"><span className="propertyStyle">Property</span></div>
            <h1 className="headingStyle text-center">Property By Categories</h1>
            <div className="MainDIv container">
                <section className="s1 item">
                    <h1 className="textOnBackground">Appartments</h1>
                    <p className="paragraphText">Great Deal Available</p>
                    <p className="backgroundBtn">13 Listings</p>
                    <img src={Apartment} class="gallery__img" alt="Image1" />
                </section>
                <section className="s2 item">
                    <h1 className="textOnBackground2">Condos</h1>
                    <p className="paragraphText2">Great Deal Available</p>
                    <p className="backgroundBtn2">13 Listings</p>
                    <img src={condor} class="gallery__img" alt="Image1" />
                </section>
                <section className="s3 item">
                    <h1 className="textOnBackground3">Houses</h1>
                    <p className="paragraphText3">Great Deal Available</p>
                    <p className="backgroundBtn3">13 Listings</p>
                    <img src={house} class="gallery__img" alt="Image1" />
                </section>
                <section className="s4 item">
                    <h1 className="textOnBackground4">Retails</h1>
                    <p className="paragraphText4">Great Deal Available</p>
                    <p className="backgroundBtn4">13 Listings</p>
                    <img src={room} class="gallery__img" alt="Image1" />
                </section>

            </div>
        </div>
    );
};

export default Category;