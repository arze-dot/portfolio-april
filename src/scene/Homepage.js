import React from 'react'
import Header from 'parts/Header'
import Section from 'elements/Section'
import Typewriter from 'typewriter-effect'
import About from 'parts/About'
import Portfolio from 'parts/Portfolio'
import Skills from 'parts/Skills'
import FormsDoJob from 'parts/FormsDoJob'
import Contact from 'parts/Contact'
import Footer from 'parts/Footer'

export default function Homepage() {
    return (
        <div className="body-wrap">
            <Header></Header>
            <main className="site-content">
                <Section>
                <div class="jumbotron jumbotron-fluid">
                 
                    <div class="container">
                    <div className="display-2 text-light text-writer">
                    <Typewriter 
                     onInit={(typewriter) => {
                        typewriter
                        .typeString("FRONT-END DEVELOPER")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("HI! IT'S EZRA HERE!")
                        .deleteAll()
                        .pauseFor(2000)
                        .typeString("C'MON LET ME SHOW YOU WHAT I'VE GOT")
                        .start();
                    }}
                    cursor=""
                    />
                    </div>
                    <div class="ellipse bg-primary"></div>
                    </div>
                </div>
                </Section>
                <About>
                </About>
                <Portfolio></Portfolio>
                <Skills></Skills>
                <FormsDoJob></FormsDoJob>
                <Contact></Contact>
                <Footer></Footer>
            </main>
        </div>
    )
}
