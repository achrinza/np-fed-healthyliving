import Head from 'next/head';

export default function Hero(props) {
    return (
        <>  
            <img className="hero-img" src={props.src} />

            {props.children}

            <style jsx>{`
                .hero-img {
                    height: 30vh;
                    width: 100%;
                    object-fit: cover;
                    position: relative;

                    ${props.style}
                }
            `}</style>
        </>
    );
}
