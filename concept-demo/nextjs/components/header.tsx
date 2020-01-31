import Head from 'next/head';
import Link from 'next/link';
import Logo from './logo'
import Programmes from '../pages/programmes';
import Benefits from '../pages/benefits';

function GlobalStyles() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto:500&display=swap" rel="stylesheet" key="font-roboto-500" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:700&display=swap" rel="stylesheet" key="font-roboto-700" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:900&display=swap" rel="stylesheet" key="font-roboto-900" />
            </Head>

            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </>
    )
}

function FeedbackPrompt() {
    return (
        <>
            <Head>
                <script defer src="/static/js/feedback-prompt.js" />
            </Head>

            <div className="block-feedback-prompt">
                <h4 className="block-feedback-prompt__lip">Feedback</h4>
                <div className="block-feedback-prompt__body">
                    <p>Hey there!</p>
                </div>
            </div>

            <style jsx>{`
                .block-feedback-prompt {
                    display: none;
                }

                @media (min-width: 980px) {
                    .block-feedback-prompt {
                        position: fixed;
                        bottom: 0;
                        right: 10%;
                        width: 300px;
                        display: block;
                        background-color: #fff;
                        z-index: 1000;
                        border: 5px solid #000;
                        border-bottom: 0;
                        padding: 1rem;
                    }
                }
            `}</style>
        </>
    )
}

function Navbar() {
    return (
        <>
            <Head>
                <script defer src="/static/js/navbar.js" />
            </Head>

            <nav className="block-site-navbar block-site-navbar--is-collapsed">
                <ul>
                    <li className="block-site-navbar__item"><Link href="/">Home</Link></li>
                    <li className="block-site-navbar__item"><Link href="/programmes">Programmes</Link></li>
                    <li className="block-site-navbar__item"><Link href="/activities">Activities</Link></li>
                    <li className="block-site-navbar__item"><Link href="/food">Food</Link></li>
                    <li className="block-site-navbar__item"><Link href="/benefits">Benefits</Link></li>
                    <li className="block-site-navbar__item"><Link href="/credits">Credits</Link></li>
                </ul>
            </nav>

            <style jsx>{`
                .block-site-navbar {
                    display: inline-block;
                }

                .block-site-navbar > ul {
                    list-style-type: none;
                    padding-left: 0;
                    margin-bottom: 0;
                    display: flex;
                    flex-direction: column;
                }

                .block-site-navbar__item a {
                    color: inherit;
                    text-decoration: none;
                }

                .block-site-navbar__item {
                    padding: 1rem 5%;
                }

                .block-site-navbar--is-collapsed {
                    display: none;
                }

                @media (min-width: 980px) {
                    .block-site-navbar ul {
                        flex-direction: row;
                    }

                    .block-site-navbar__item {
                        padding: .5rem;
                    }

                    .block-site-navbar--is-collapsed {
                        display: block;
                    }
                }
            `}</style>
        </>
    )
}

export default function Header() {
    return (
        <>
            <Head>
                <script defer src="/static/js/header-scroll-collapse.js" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" key="css-material-icons" />
            </Head>

            <GlobalStyles />

            {/* <FeedbackPrompt /> */}

            <header className="block-page-header">
                <div className="block-page-header__part">
                    <Logo />
                    <i className="material-icons block-site-navbar-toggler">menu</i>
                </div>
                <Navbar />
            </header>

            <div className="block-page-header-height-offset" role="presentation" />

            <style jsx>{`
                @keyframes header-intro {
                    0% {
                        transform: translateY(-100%);
                        left 30%;
                        right 30%;
                        border-radius: 0;
                    }
                    100% {
                        left: 5%;
                        right: 5%;
                        border-radius: 12px;
                    }
                }

                .block-site-navbar-toggler {
                    cursor: pointer;
                }

                .block-page-header {
                    position: fixed;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: .5rem;
                    background-color: #fff;
                    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
                    animation: .5s header-intro;
                    transition: .5s transform, .5s border-radius, .5s left, .5s right, .5s border-top;
                    box-sizing: border-box;

                    display: flex;
                    flex-direction: column;
                }

                .block-page-header__part {
                    flex-basis: 100%;
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    padding: 0 1.5rem;
                    justify-content: space-between;
                }
                
                @media (min-width: 980px) {
                    .block-page-header {
                        flex-direction: row;
                        align-items: center;
                    }

                    .block-site-navbar-toggler {
                        display: none;
                    }
                }

                @media (min-width: 980px) {
                    .block-page-header {
                        left: 5%;
                        right: 5%;
                        border-radius: 12px;
                        transform: translateY(25%);
                        overflow: hidden;
                    }

                    .block-page-header--is-flattened {
                        transform: translateY(0);
                        border-radius: 0;
                        left: 0;
                        right: 0;
                        border-top: 5px solid #005501;
                    }
                }

                .block-page-header--is-collapsed {
                    transform: translateY(-100%);
                }
            `}</style>
        </>
    )
}
