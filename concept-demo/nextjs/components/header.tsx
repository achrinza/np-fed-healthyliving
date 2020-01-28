import Head from 'next/head';
import Logo from './logo'

export function GlobalStyles() {
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

export default function Header() {
    return (
        <>
            <Head>
                <script defer src="/static/js/header-scroll-collapse.js" />
            </Head>

            <GlobalStyles />

            <header className="block-page-header">
                <Logo />
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

                .block-page-header {
                    position: fixed;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: .5rem;
                    background-color: #fff;
                    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
                    animation: .5s header-intro;
                    transition: .5s transform, .5s border-radius, .5s left, .5s right;
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
                    }
                }

                .block-page-header--is-collapsed {
                    transform: translateY(-100%);
                }
            `}</style>
        </>
    )
}
