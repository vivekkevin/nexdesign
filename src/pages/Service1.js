import React, { useState } from 'react';
import Shead from '../components/Shead';
import Sfoot from '../components/Sfoot';
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
            <Shead currentIndex={currentIndex} slides={slides} handleSlideChange={handleSlideChange} />
            <Sfoot currentIndex={currentIndex} slides={slides} setCurrentIndex={setCurrentIndex} />
            <Contact />
        </div>
    );
};

export default Service1;
