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

export default function test() {
    return (
        <>
            <Head>
                <title>Healthy Foods</title>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
                <link href="https://fonts.googleapis.com/css?family=Wallpoet|Yeon+Sung&display=swap" rel="stylesheet" />
                <script defer src="/static/js/test.js" />
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
                <header>
                    <h1 className="animated bounceInDown">Animate.css</h1>
                    <h2 className="animated bounceInDown">Level Up Your Websites with Animate.css</h2>
                    <span className="animated bounce"></span>
                </header>

                <h2 className="new-section">Scroll Animations</h2>
                <div className="scroll-animations">
                    <div className="animated">
                        <span>&#9742;</span>
                        <h3>Number One</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
                    </div>
                    <div className="animated">
                        <span>&#9835;</span>
                        <h3>Number Two</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
                    </div>
                    <div className="animated">
                        <span>&#9730;</span>
                        <h3>Number Three</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem pharetra a.</p>
                    </div>
                </div>
                <div className="click-animations">
                    <h2 className="new-section">Click Animations</h2>
                    <form>
                        <input type="text" placeholder="Name" id="name" />
                        <input type="text" placeholder="Email" id="email" />
                        <textarea rows={7} placeholder="Message" id="message"></textarea>
                    </form>
                    <button>Send</button>
                </div>
            <style jsx>{`

                /* General/reset styles */

                * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                }

                body {
                font-family: 'Roboto', sans-serif;
                overflow-x: hidden;
                color: #333;
                }

                .new-section {
                padding-top: 50px;
                text-align: center;
                font-size: 4em;
                font-weight: 100;
                }

                /* Header styles */

                header {
                position: relative;
                text-align: center;
                height: 100vh;
                background: linear-gradient(to right, #69bcf4, #30cc8b);
                color: #fff;
                }

                header h1 {
                padding-top: 100px;
                padding-top: -webkit-calc(50vh - 113px);
                padding-top: expression(50vh - 113px);
                padding-top: -moz-calc(50vh - 113px);
                padding-top: -o-calc(50vh - 113px);
                padding-top: calc(50vh - 113px);
                font-size: 7em;
                font-weight: 100;
                }

                header h2 {
                font-size: 2em;
                }

                header span.animated {
                position: absolute;
                margin: auto;
                right: 0;
                left: 0;
                bottom: 50px;
                height: 4px;
                width: 4px;
                border-radius: 2px;
                background: #fff;
                animation-duration: 2.5s;
                animation-iteration-count: infinite;
                }

                header span::before,
                header span::after {
                position: absolute;
                top: -23px;
                content: "";
                height: 30px;
                width: 4px;
                border-radius: 2px;
                background: #fff;
                }

                header span::before {
                left: -10px;
                -webkit-transform: rotate(-45deg);
                -moz-transform:    rotate(-45deg);
                -ms-transform:     rotate(-45deg);
                -o-transform:      rotate(-45deg);
                transform:         rotate(-45deg);
                }

                header span::after {
                right: -10px;
                -webkit-transform: rotate(45deg);
                -moz-transform:    rotate(45deg);
                -ms-transform:     rotate(45deg);
                -o-transform:      rotate(45deg);
                transform:         rotate(45deg);
                }

                /* Scroll animations styles */

                .scroll-animations {
                display: flex;
                }

                .scroll-animations div {
                flex-grow: 1;
                padding: 30px;
                text-align: center;
                opacity: 0;
                color: #333;
                }

                .scroll-animations div span {
                font-size: 4em;
                color: #5AA9E0;
                }

                .scroll-animations div h3 {
                font-size: 1.9em;
                font-weight: 400;
                margin-bottom: 10px;
                }

                /* Click animations styles */

                .click-animations {
                margin-top: 35px;
                padding-bottom: 20px;
                background: #f6f8fa;
                }

                .click-animations input {
                display: block;
                margin: 20px auto;
                padding: 10px;
                height: 50px;
                width: 50%;
                font-size: 30px;
                outline: none;
                border: 2px solid transparent;
                transition: 0.3s;
                }

                .click-animations textarea {
                display: block;
                margin: 20px auto;
                padding: 10px;
                width: 50%;
                font-size: 30px;
                outline: none;
                border: 2px solid transparent;
                resize: none;
                transition: 0.3s;
                }

                .click-animations input:focus,
                .click-animations textarea:focus {
                border-color: #30cc8b;
                }

                .click-animations button {
                display: block;
                margin: 20px auto;
                padding: 10px;
                width: 50%;
                font-size: 30px;
                border: none;
                outline: none;
                background: #30cc8b;
                color: #fff;
                cursor: pointer;
                transition: 0.2s;
                }

                .click-animations button:active {
                transform: scale(0.95);
                }

                .form-error {
                border-color: #F46036 !important;
                }

                /* Media queries */

                @media (max-width: 759px) {
                    header h1 {
                        font-size: 5em;
                    }
                    
                    .new-section {
                        font-size: 3em;
                    }
                    
                    .scroll-animations {
                        display: block;
                    }
                    
                    .scroll-animations div {
                        padding: 20px 80px;
                    }
                    
                    .click-animations input,
                    .click-animations textarea,
                    .click-animations button {
                        width: 80%;
                    }
                }

                @media (max-width: 475px) {
                    .new-section {
                        font-size: 2.5em;
                    } 
                    
                    header h1 {
                        font-size: 3.2em;
                    }
                    
                    header h2,
                    .funky-animations h3 {
                        font-size: 1.5em;
                    }
                }

            `}</style>
        </>
    )
}
