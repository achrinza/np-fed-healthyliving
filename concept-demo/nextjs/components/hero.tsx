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
                    height: 30vh;
                    width: 100%;
                    object-fit: cover;
                }
            `}</style>
        </>
    );
}
