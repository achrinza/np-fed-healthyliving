import Head from 'next/head';

export default function Hero(props) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
            </Head>
            
            <img className="hero-img" src={props.src} />

            <style jsx>{`
                .hero-img {
                    min-height: 40vh;
                    max-height: 50vh;
                    width: 100%;
                    object-fit: cover;
                    position:relative;
                }
            `}</style>
        </>
    );
}
