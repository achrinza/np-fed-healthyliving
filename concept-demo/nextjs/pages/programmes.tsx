import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Sectionr from '../components/sectionr';

export default function Programmes() {
    return (
        <>
            <Head>
                <script defer src="/static/js/animatr.js" />
                <script defer src="/static/js/stickyr.js" />
                <script defer src="/static/js/program-searchr.js" />
                <link rel="stylesheet" href="/static/css/programmes.css" />
            </Head>
            
            <Header />

            <div className="block-hero-wrapper">
                <Hero src="/static/media/programmes-hero.jpg" style="position: relative; height: 100vh;">
                    <div className="block-hero__backdrop" />
                    <div className="block-hero__textblock">
                        <div className="block-hero__textblock-group">
                            <h1 className="block-hero__title">Programmes</h1>
                            <p className="block-hero__desc">View a collection of upcoming programmes that you can join!</p>
                        </div>
                    </div>
                </Hero>

                <div className="block-hero-transitioner-wrapper">
                    <svg className="block-hero-transitioner" xmlns="http://www.w3.org/2000/svg" height="320px" width="100%" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path fill="#00cba9" fillOpacity="1" d="M0,160L48,186.7C96,213,192,267,288,250.7C384,235,480,149,576,138.7C672,128,768,192,864,213.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

            <div className="block-main-content-wrapper">
                {/* <div className="block-initial-section">
                    <img className="block-initial-section__img" src="/static/media/fitbit-applewatch.jpg" />
                    <p>Find a programme suited for you!</p>
                </div> */}

                <div className="block-section-wrapper block-programme-search">
                    <form>
                        <input className="block-programme-search__textbox" type="text" placeholder="Search for a programme" />
                    </form>
                </div>

                <div className="block-section-wrapper block-programme" data-animatr="left">
                    <Sectionr type="left" imgUrl="/static/media/masthead-healthy-living-programme.jpg">
                        <h2>Mall workouts</h2>
                        <p>Grab the latest list of tailored mass-workouts for the public! Enjoy from a wide variety of activities that will get you up to speed.</p>
                        <div className="block-btn"></div>
                    </Sectionr>
                </div>

                <div className="block-main-content-wrapper block-programme">
                    <div className="block-section-wrapper" data-animatr="right">
                        <Sectionr type="right" imgUrl="/static/media/fight-programme.jpg">
                            <h2>F.I.G.H.T</h2>
                            <p>Join us and fight the spread of infectious diseases such as influenza, hand, foot and mouth disease, tuberculosis, and pneumococcal disease. We’ve created a song to get you started! Watch on to see how you can do your part.</p>
                        </Sectionr>
                    </div>
                </div>

                <div className="block-main-content-wrapper block-programme">
                    <div className="block-section-wrapper" data-animatr="left">
                        <Sectionr type="left" imgUrl="/static/media/eatdrinkshop-challenge.png">
                            <h2>Eat, Drink, Shop Challenge</h2>
                            <p>Want non-stop wins at health? Choose healthy to earn Healthpoints and rewards! Simply scan your QR receipt with the Healthy 365 app and redeem exciting rewards such as grocery and dining discounts!</p>
                        </Sectionr>
                    </div>
                </div>

                <div className="block-main-content-wrapper block-programme">
                    <div className="block-section-wrapper" data-animatr="right">
                        <Sectionr type="right" imgUrl="/static/media/nsc.png">
                            <h2>National Steps Challenge™ Community Challenge</h2>
                            <p>Feel good with every move as you bond with your neighbours! The National Steps Challenge™ Season 5 is back with Community Challenge!</p>
                        </Sectionr>
                    </div>
                </div>

                <Footer />
            </div>

            <style jsx>{`

            `}</style>
        </>
    )
}
