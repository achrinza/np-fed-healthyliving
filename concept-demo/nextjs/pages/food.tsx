import Hero from "../components/hero";
import Head from "next/head";
import Header from '../components/header';

function GlobalStyles() {
    return (
        <>
            <style jsx global>{`
                body {
                    background-color: #756B66;
                    margin: 0 auto;
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
            <div className="header-row">
                <Header />
            </div>
            <GlobalStyles />

            <div className="row-img">
                <Hero src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80" style="height: 50vh;" alt="Unable to fetch image">
                    <div className="hero-text">
                        <h1>Healthy Foods</h1>
                        <hr/>
                        <p>A library of foods, and the many benefits they provide</p>
                    </div>
                </Hero>
            </div>
            <style jsx>{`
                .row-body{
                    box-shadow: inset 0 0 5px #000000;
                }
                .hero-text{
                    background-color: rgba(0,0,0, 0.65);
                    background-position: center center;
                    height: auto;
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    top: 35%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
                hr {
                    display: block;
                    height: 1px;
                    border: 0;
                    border-top: 3px solid #ccc;
                    margin: 1em 0;
                    padding: 0;
                }
                .hero-text{
                    font-family: "Yeon Sung";
                    color: white;
                }
                .hero-text h1{
                    font-size: 3.8vw; 
                    margin-top: 0px;
                    margin-bottom: 5px;                   
                }
                .hero-text p{
                    font-size: 1.8vw;
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
                .header-row{
                    background-color: white;
                    box-shadow: inset 0 0 10px #000000;
                }
            `}</style>
        </>
    )
}
