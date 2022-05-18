import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import LinksBar from '../components/LinksBar'
import NavBar from '../components/NavBar'
import ProjectsSection from '../components/ProjectsSection'
import SectionContainer from '../components/SectionContainer'
import Socials from '../components/Socials'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import SpinnerLoader from '../components/SpinnerLoader'
import ResumeSection from '../components/ResumeSection'

const Home = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className={styles.container}>
      {!pageLoaded
        ? <SpinnerLoader />
        : (
          <>
          <Head>
            <title>Portfolio - Israel Bonilla</title>
            <meta name="description" content="Israel Bonilla's portfolio" />
            <link rel="icon" href="https://links.israelb.xyz/portfolio/IB-Logo.png" />
          </Head>

          {/* Loading spinner (?) */}

          <div className={styles.background}></div>

          <NavBar />

          <LinksBar />
          <Socials />

          <main className={styles.main}>
            {/* About */}
            <SectionContainer title="About" id="about">
              <AboutSection />
            </SectionContainer>

            {/* Portfolio/Projects Showcase */}
            <SectionContainer title="Portfolio" id="projects">
              <ProjectsSection />
            </SectionContainer>

            {/* Resume */}
            <SectionContainer title="Resume" id="resume">
              <ResumeSection />
            </SectionContainer>

            {/* Contact */}
            <SectionContainer title="Contact" id="contact">
              <ContactSection />
            </SectionContainer>

            {/* Achievements/Techs/Libraries I've used/Other stuff/sections */}
            {/* <SectionContainer title="Other" id="other">

            </SectionContainer>

            <SectionContainer title="Other" id="other">

            </SectionContainer>

            <SectionContainer title="Other" id="other">

            </SectionContainer> */}
          </main>

          {/* footer (?) */}
          </>
        )
      }
    </div>
  )
}

export default Home