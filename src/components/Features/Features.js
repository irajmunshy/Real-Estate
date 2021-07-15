import { faHammer, faHotel, faMapMarkedAlt, faTractor } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FetureDetails from './FetureDetails';

const infoData = [
    {
        id: "1",
        icon: faHotel,
        title: "Smart living",
        subtitle: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
    },
    {
        id: "2",
        icon: faHammer,
        title: "ECO Construction",
        subtitle: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
    },
    {
        id: "3",
        icon: faMapMarkedAlt,
        title: "Atractive Location",
        subtitle: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
    },
    {
        id: "4",
        icon: faTractor,
        title: "Modern Technology",
        subtitle: 'Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.'
    }
]
const Features = () => {
    return (
        <section>
            <div className="text-center"><span className="propertyStyle">Feature</span></div>
            <h1 className="headingStyle text-center">Core Feature</h1>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        infoData.map((feature, index) => <FetureDetails key={feature.id} feature={feature} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Features;