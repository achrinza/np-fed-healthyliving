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
                <link rel="stylesheet" href="/static/css/food.css" />
            </Head>
            <div className="header-row">
                <Header />
            </div>
            <GlobalStyles />

            <div id="fullPage">
                <div className="section">
                    <div className="parallax-header">
                        <img className="hero" src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="header" />
                        <div data-parallaxr data-parallaxr-drift="80" data-parallaxr-startfrom="top" className="parallax-header_textbox show-on-scroll">
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
                            <label className="fbname">Let us know who you are! : |  
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
        </>  
    )
}
