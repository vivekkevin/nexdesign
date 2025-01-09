import React, { useState } from 'react';
import SShead from '../components/SShead';
import SSfoot from '../components/SSfoot';
import Contact from '../components/Contact';
import { sslides } from '../data/sslides';

const Service1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < sslides.length) {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <div>
            <SShead currentIndex={currentIndex} sslides={sslides} handleSlideChange={handleSlideChange} />
            <SSfoot currentIndex={currentIndex} sslides={sslides} setCurrentIndex={setCurrentIndex} />
            <Contact />
        </div>
    );
};

export default Service1;
