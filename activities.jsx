import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <meta content="author" description="Neo Say Ping"/>
                <meta content="description" description="Healthy activities"/>
                <title>Healthy Activities</title>
            </Head>
            <Hero src="/activities header.jpg"/>
            <h1>Activies you can do to stay healthy</h1>

            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                    text-align: centre;
                }
            `}</style>
        </>
    );
}
