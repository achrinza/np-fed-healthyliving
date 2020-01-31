import Head from 'next/head';
import Sectionr from '../components/sectionr'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <script defer src="/static/js/parallaxr.js" />
                <title>Healthy.SG - Getting Singaporeans pumped up</title>
            </Head>

            <Header />

            <video className="hero" src="/static/media/running.mov" autoPlay muted loop />

            <Sectionr type="left" imgUrl="/static/media/homepage-hero.jpg">
                <h2>Programmes</h2>
                <p>Get to know more of the many fun activities provided by the government, most free of charge!</p>
                <a href="/programmes">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

            <Sectionr type="right" imgUrl="/static/media/homepage-hero.jpg">
                <h2>Activities</h2>
                <p>Get to know what activities you can do to keep yourself healthy at a low cost!</p>
                <a href="/activities">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

            <Sectionr type="left" imgUrl="/static/media/homepage-hero.jpg">
                <h2>Healthy eating</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="/food">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

            <Footer />

            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                }

                .hero {
                    height: 100vh;
                    width: 100%;
                    object-fit: cover;
                }
            `}</style>
        </>
    );
}
