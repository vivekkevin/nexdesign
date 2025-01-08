import React, { useState } from 'react';
import SShead from '../components/SShead';
import SSfoot from '../components/SSfoot';
import Contact from '../components/Contact';
import { slides } from '../data/slides';

const Service1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (newIndex) => {
        if (newIndex >= 0 && newIndex < slides.length) {
            setCurrentIndex(newIndex);
        }
    };

    return (
        <div>
            <SShead currentIndex={currentIndex} slides={slides} handleSlideChange={handleSlideChange} />
            <SSfoot currentIndex={currentIndex} slides={slides} setCurrentIndex={setCurrentIndex} />
            <Contact />
        </div>
    );
};

export default Service1;
