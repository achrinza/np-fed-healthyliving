import Hero from "../components/hero";
import Head from "next/head";
import Header from '../components/header';
import Footer from '../components/footer';

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
                <meta name="author" content="Lim Jun Hao" />
                <meta name="description" content="Healthy Foods" />
                <link href="https://fonts.googleapis.com/css?family=Wallpoet|Yeon+Sung&display=swap" rel="stylesheet" />
                <script defer src="/static/js/parallaxr.js" />
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" key="jquery3" />
                <script async src="/static/js/jqury-food.js" />
                <script defer src="/static/js/viewport-food.js" />
                <script async src="/static/js/valida.js"></script>
            </Head>
            <div className="header-row">
                <Header />
            </div>
            <GlobalStyles />

            <div id="fullPage">
                <div className="section">
                    <div className="parallax-header">
                        <img className="hero" src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="header" />
                        <div data-parallaxr data-parallaxr-drift="100" className="parallax-header_textbox show-on-scroll">
                            <h1>Healthy Foods</h1>
                            <p>Eat good, feel good, Look Good.</p>
                        </div>
                    </div>
                </div>
                <div className="overlay">
                    <div className="section-special">
                        <div className="overview show-on-scroll">
                            <img className="healthyplate" src="/static/media/Healthy-Plate.png" alt="Healthy Plate" />
                            <div className="overview_text">
                                <p> The Healthy Plate is a friendly, easy-to-understand visual guide for creating balanced and healthy meals, 
                                    by visually representing the correct proportions of different food groups you should eat on a simple plate.
                                    You can even use it as a guide to plan your portions accordingly!</p>
                                <p className="note">Note: This is ultimately a guide, and will have to be tuned to each person.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sect-separate">
                    <div className="section">
                        <div className="sechead">
                            <hr/>
                            <h1>In-Depth Analysis</h1>
                            <hr className="smaller"/>
                        </div>
                        <div className="button-row">
                            <button type="button" id="veggie"><img src="/static/media/veggie.png" alt="veg" /></button>
                            <button type="button" id="carbos"><img src="/static/media/carbs.png" alt="carb" /></button>
                            <button type="button" id="protein"><img src="/static/media/meat.png" alt="meat" /></button>
                        </div>
                        <div className="tab" id="veg">
                            <img className="profile" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" /> 
                            <h1 className="vegh1">Time to pile on those vegetables!</h1>
                            <p>Fruit and vegetables are naturally low in saturated and trans fat, and rich in dietary fibre, vitamins and minerals. 
                                They can help lower your risk of developing heart disease, stroke, and certain types of cancer.
                                Fruit and vegetables also add delightful colours, textures and flavours to your diet. In fact, different colour pigments they contain serve up unique health benefits. 
                                Treat yourself to the full colourful spectrum of nature’s bounty for maximum benefits.</p>
                        </div>
                        <div className="tab" id="carbs">
                            <img className="profile" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" /> 
                            <h1 className="carbsh1">Carbs do more than make you full!</h1>
                            <p>Wholegrain foods such as brown rice, wholemeal bread and rolled oats contain vitamins (vitamins B and E), minerals (iron, zinc and magnesium), phytochemicals (lignans, phytosterols) and inulin (a type of dietary fibre);
                                all of which are good for a healthier you.
                                Refined grains such as white rice or white bread have been processed, so valuable nutrients have been lost.
                                Choosing whole-grains over refined grains means you get all the goodness that reduces the risk of developing heart disease and diabetes, while helping with weight management since you’ll feel full for longer.</p>
                        </div>
                        <div className="tab" id="meat">
                            <img className="profile" src="https://images.unsplash.com/photo-1542365887-1149961dccc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" /> 
                            <h1 className="meath1">I know you like these..</h1>
                            <p>This category includes poultry (e.g. chicken, duck and turkey), meats (e.g. beef, mutton and pork), seafood, eggs, nuts, bean products and low-fat dairy products.
                               Aim for 2 servings of fish per week. 
                               Oily fish (e.g. tuna, mackerel, tenggiri batang and ikan tenggiri papan) contain omega-3 fatty acids – a beneficial fat that supports overall heart health.</p>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <form>
                        <fieldset>
                            <legend>FeedBack</legend>
                            <label className="fbname">Let us know who you are!:  
                                <input id="feedname" type="text" className="name" placeholder="Enter name(optional)" />
                            </label>
                            <label><input type="radio" name="rating" className="rate" /> 1 Star</label>
                            <label><input type="radio" name="rating" className="rate" /> 2 Star</label>
                            <label><input type="radio" name="rating" className="rate" /> 3 Star</label>
                            <label><input type="radio" name="rating" className="rate" /> 4 Star</label>
                            <label><input type="radio" name="rating" className="rate" /> 5 Star</label>
                        </fieldset>
                        <input type="submit" className="submit"/>
                    </form>
                    <div className="answer">
                        <p id="reply"></p>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                <Footer />
            </div>
            <style jsx>{`
                body {
                    text-align: center;
                    margin: 0;
                }
                .section {
                    height: 95vh;
                    padding: 2em;
                    padding-left: 0;
                    padding-right: 0;
                }
                .section-special {
                    min-height: 70vh;
                    max-height: 90vh;
                    position: relative;
                    padding-bottom: 2em;
                }
                .parallax-header img{
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                }
                .parallax-header_textbox {
                    position: relative;
                    text-align: center;
                    top: 10vh;
                    font-size: 4vw;
                    font-family: "Yeon Sung";
                    color: white;
                    text-shadow: 2px 2px 4px #061E1F;
                    opacity: 0;
                    transition: 1s;
                }
                .parallax-header_textbox h1 {
                    font-size: 5vw;
                }
                .parallax-header_textbox {
                    animation: fadeIn 0.4s ease-in 0.7s forwards;
                }

                .overview {
                    padding-top: 5vw;
                    padding-left: 12%;
                    padding-right: 12%;
                    transition: 1s;
                    opacity: 0;
                    transform: translateX(-30%);   
                }
                .overview {
                    animation: fadeIn 1s ease-in 0.7s forwards, slideIn 0.7s ease-in 0.9s forwards;
                }
                
                .healthyplate {
                    
                    height: auto;
                    width: 45vh;
                    float: left;
                }
                .overlay {
                    background-color: #403A37;
                    box-shadow 5px 5px 10px #1F1C1B inset;
                    margin: 5%;
                    overflow: hidden;        
                }
                .overview p {
                    font-size: 1.8vw;
                    color: white;
                    text-align: center;
                    padding-top: 4vw;
                }
                .overview .note {
                    overflow: auto;
                    color: red;
                    padding-top: 0;
                    padding-bottom: 5vw;
                    
                }
                .sect-separate {
                    background-color: #574F4B;
                    padding-top: 2em;
                    padding-bottom: 4vw;
                    overflow: hidden;
                }
                .sechead {
                    font-size: 1.6vw;
                    text-align: center;
                    padding-left: 10%;
                    padding-right: 10%;
                }
                .smaller {
                    width: 90%;
                }

                @keyframes fadeIn {
                60% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                @keyframes slideIn {
                    100% {
                        transform: translateX(0);
                    }
                }
                .sechead hr {
                    box-shadow: 2px 2px 2px #1F1C1B;
                }
                .button-row {
                    padding-top: 5px;
                    text-align: center;
                }
                .button-row button {
                    background-color: Transparent;
                    width: 10vw;
                    margin: 0 5vw 0 5vw;
                    border-radius: 10%;
                    outline:0;
                    border: 0;
                    position: relative;
                    transition: .5s;
                }
                .button-row button:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 10%;
                    background-color: Transparent;
                    transition: .5s;
                    transform: scale(0.9s);
                    z-index: -1; 
                }
                .button-row button:hover:before {
                    transform: scale(1.2);
                    box-shadow: 0 0 15px #FFF7E8 inset;
                    filter: blur(3px);
                }
                .button-row button:hover {
                    box-shadow: 0 0 15px #FFF7E8 inset;
                }
                .button-row img {
                    height: auto;
                    width: 7vw;
                }
                .tab {
                    padding: 5% 10% 0 10%;
                }
                .tab .profile {
                    height: auto;
                    width: 30vw;
                    border-radius: 30%;
                    float: left;
                    margin: 2vw;
                }
                .tab h1 {
                    font-size: 3vw;
                    text-align: center;
                    filter: blur(1px);
                }
                .tab .vegh1 {
                    color: #3D3735;
                    text-shadow: 0 0 10px #24EB01;
                }
                .tab .carbsh1 {
                    color: #3D3735;
                    text-shadow: 0 0 10px #F77D02;
                }
                .tab .meath1 {
                    color: #3D3735;
                    text-shadow: 0 0 10px #D6002C;
                }
                .tab p {
                    font-size: 1.4vw;
                    color: white;
                    text-align: center;
                    overflow: auto;
                }
                .profile {
                    box-shadow: 0 0 15px #FFE6DE;
                }
                form {
                    margin: 10%;
                    align-self: center;
                }
                fieldset {
                    border: 2px solid black;
                }
                legend {
                    margin: 5px;
                    width: 30%;
                    text-align: center;
                    font-size: 3vw;
                    background-color: #3D3735;
                    color: dimgrey;
                }
                label {
                    padding-left: 10%;
                    font-size: 2vw;
                    display: inline-block;
                }
                #feedname {
                    background-color: #3D3735;
                    outline: none;
                    border: none;
                    padding-left: 5px;
                }
                .fbname {
                    margin-left: 5vw;
                    margin-right: 5vw;
                    padding-right: 3vw;
                }
                .submit {
                    float: right;
                    font-size: 2vw;
                    color: dimgrey;
                    background-color: #3D3735;
                    border: none;
                }
                .answer {
                    background-color: #3D3735;
                    width: 80%;
                    padding-left: 10%;
                    padding-right: 10%;
                    margin-left: 10%;
                }
                #reply {
                    text-align: center;
                    font-size: 3vw;
                    color: white;
                }
            `}</style>
        </>  
    )
}
