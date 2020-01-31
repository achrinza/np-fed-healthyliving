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
            <div className="body_sections">
                <Sectionr type="left" imgUrl="https://images.unsplash.com/photo-1536181783029-1097aaf179de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" style="max-height: 60vh;">
                        <h2>Programmes</h2>
                        <p>Get to know more of the many fun activities provided by the government, most free of charge!</p>
                        <a href="/programmes">Let's seem <abbr title="them">'em</abbr>!</a>
                </Sectionr>

                <Sectionr type="right" imgUrl="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style="max-height: 60vh;">
                    <h2>Activities</h2>
                    <p>Get to know what activities you can do to keep yourself healthy at a low cost!</p>
                    <a href="/activities">Let's seem <abbr title="them">'em</abbr>!</a>
                </Sectionr>

                <Sectionr type="left" imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style="max-height: 60vh;">
                    <h2>Healthy eating</h2>
                    <p>Gain the essentials to start planning your healthy diet! No More Searching! It's all here!</p>
                    <a href="/food">Let's seem <abbr title="them">'em</abbr>!</a>
                </Sectionr>
            </div>

            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                }

                .hero {
                    height: 100vh;
                    width: 100%;
                    object-fit: cover;
                }
                .body_sections {
                    margin-top: -5px;
                    background-color: #0D1140;
                    color: #FAF7DB;
                    text-shadow: 2px 2px 4px #061E1F;
                }
            `}</style>
        </>
    );
}
