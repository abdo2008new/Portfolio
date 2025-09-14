import React from 'react';
import { ThemeToggle } from '../Components/ThemeToggle';
import { GalaxyBackground } from '../Components/GalaxyBackground.jsx';
import { ThenavBar } from '../Components/ThenavBar.jsx';
import { HomeSection } from '../Components/HomeSection.jsx';
import { AboutSection } from '../Components/AboutSection.jsx';
import { SkillsSection } from '../Components/SkillsSection.jsx';
import { ProjectSection } from '../Components/ProjectSection.jsx';
import {ContactSection} from '../Components/ContactSection.jsx'
import{Footer} from '../Components/Footer.jsx'



export const Home = ()=>{

    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
    <ThemeToggle />
        {/* background effects*/}
    <GalaxyBackground />
        {/* Navbar */}
    <ThenavBar />
        {/* Main Content */}
    <main>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
    </main>
        {/* Footer */}
        <Footer/>
        </div>
    )

};