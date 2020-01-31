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
            <Sectionr type="left" imgUrl="https://images.unsplash.com/photo-1536181783029-1097aaf179de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80">
                <h2>Programmes</h2>
                <p>Get to know more of the many fun activities provided by the government, most free of charge!</p>
                <a href="/programmes">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

            <Sectionr type="right" imgUrl="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80">
                <h2>Activities</h2>
                <p>Get to know what activities you can do to keep yourself healthy at a low cost!</p>
                <a href="/activities">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

            <Sectionr type="left" imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
                <h2>Healthy eating</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="/food">Let's seem <abbr title="them">'em</abbr>!</a>
            </Sectionr>

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
