import Hero from "./hero";
import Head from "next/head";

function GlobalStyles() {
    return (
        <>
            <style jsx global>{`
                body {
                    margin: 0;
                    background-color: #756B66;
                }
            `}</style>
        </>
    )
}

export default function Foodpage() {
    return (
        <>
            <Head>
                <title>Healthy Foods</title>
                <link href="https://fonts.googleapis.com/css?family=Wallpoet|Yeon+Sung&display=swap" rel="stylesheet" />
            </Head>

            <GlobalStyles />

            <div className="grid-container">
                <div className="row">
                    <Hero src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" alt="Unable to fetch image" />
                    <div className="hero-text">
                        <h1>Healthy Foods</h1>
                        <hr/>
                        <p>A library of foods, and the many benefits they provide</p>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>

            <style jsx>{`
                .grid-container 
                {
                    display: grid;
                    grid-template-rows: 40vh 60vh;
                }
                .hero-text
                {
                    background-color: rgba(0,0,0, 0.65);
                    background-position: center center;
                    min-height: auto;
                    max-height: 150%;
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -140%);
                    padding-top: 30px;
                    padding-bottom:30px;
                }
                hr 
                {
                    display: block;
                    height: 1px;
                    border: 0;
                    border-top: 3px solid #ccc;
                    margin: 1em 0;
                    padding: 0;
                }
                .hero-text
                {
                    font-family: "Yeon Sung";
                    color: white;
                }
                .hero-text h1
                {
                    font-size: 3.8vw; 
                    margin-top: 0px;
                    margin-bottom: 5px;                   
                }
                .hero-text p
                {
                    font-size: 1.8vw;
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
            `}</style>
        </>
    )
}