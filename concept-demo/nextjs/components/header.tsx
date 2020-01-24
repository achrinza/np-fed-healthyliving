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
            <GlobalStyles />

            <header>
                <Logo />
            </header>
        </>
    )
}
