import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Summary from './Summary';

const MyPortfolio = () => {
    return (
        <div>
            <AboutMe />
            <Skills />
            <Summary />
            <Projects />
        </div>
    );
};

export default MyPortfolio;