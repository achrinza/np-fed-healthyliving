import Head from 'next/head';
import SplitSection from '../components/section'
import Header from '../components/header';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <script defer src="/static/js/parallaxr.js" />
                <title>Hello, Werld</title>
            </Head>

            <Header />

            <video data-parallaxr data-parallaxr-startfrom="top" data-parallaxr-drift="10" className="hero" src="/static/media/running.mov" autoPlay loop />

            <SplitSection type="left" imgUrl="/static/media/homepage-hero.jpg" title="Hello World!" description="Lorem ipsum sit amet" />


            <div data-parallaxr data-parallaxr-drift="100"><p>Parallax!</p></div>

            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>
            <p>Filler text</p>

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
