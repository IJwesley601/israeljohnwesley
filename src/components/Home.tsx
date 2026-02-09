import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home: React.FC = () => {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section id="about" className="py-20">
                <About />
            </section>
            <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                <Skills />
            </section>
            <section id="projects" className="py-20">
                <Projects />
            </section>
            <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                <Contact />
            </section>
        </main>
    );
};

export default Home;
