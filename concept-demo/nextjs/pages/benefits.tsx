import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Benefits() {
    return (
        <>
            <Head>
                <title>Benifit</title>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
                <link href="https://fonts.googleapis.com/css?family=Anton|Bungee|Oswald&display=swap" rel="stylesheet" key="font-bungee"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" key="css-animate" />
                <script async src="/static/js/scroll-left.js" />
            </Head>

            <Header />

            <div className="top-header">
                <Hero src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style="height: 50vh;" alt="Unable to fetch image">
                    <div className="hero-text">
                        <h1>Stay healthy</h1>
                        <hr/>
                        <p>Why should we stay healthy?</p>
                    </div>
                </Hero>
            </div>
            <div className="container-fluid">
                <div className="row bg1">
                    <h2 className="text-center">WHY IS IT IMPORTANT</h2>    
                    <p>Staying healthy physically can help you stay healthy emotionally too. If you're eating the right food and keeping fit, your body will be strong and help you to cope with stress and also fight illness.</p>
                    <p>Eating well and exercising often when you're a teenager will also help you stay in good health later in life.</p>
                    <p>Getting regular sleep is another really important way to stay healthy. Having late nights can leave you feeling tired the next day. It can be difficult, but try to have at least 8 hours sleep each night.</p>
                </div>
                <div className="breaker1">
                    <img className="poly" src="https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt="Unable to fetch image"></img>
                </div>
                <div className="row bg2">
                    <h2 className="text-center">DOING REGULAR EXERCISE</h2>    
                    <p>Staying healthy physically can help you stay healthy emotionally too. If you're eating the right food and keeping fit, your body will be strong and help you to cope with stress and also fight illness.</p>
                    <p>Eating well and exercising often when you're a teenager will also help you stay in good health later in life.</p>
                    <p>Getting regular sleep is another really important way to stay healthy. Having late nights can leave you feeling tired the next day. It can be difficult, but try to have at least 8 hours sleep each night.</p>
                </div>
                <div className="breaker2">
                    <img className="poly" src="https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=819&q=80" alt="Unable to fetch image"></img>
                </div>
                <div className="row bg3">
                    <h2 className="text-center">HAVING A BALANCED DIET</h2>
                    <div className="scroll-animations">
                        <div className="col-md food-box1 animated">
                            <h5>Eating and drinking the right things</h5>
                            <p>It can be hard to keep a healthy diet. Especially when there's a temptation to eat sweets and junk food. But it's important to get a balance in your diet from each food group.</p>
                            <p>A balanced diet also includes drinks. Your body needs to stay hydrated to keep healthy. But when drinking Caffeine and sugary drinks:</p>
                            <ul>
                                <li>can cause mood swings</li>
                                <li>affect your energy levels, feeling full of energy before a "sugar low" where you may feel tired and grumpy</li>
                                <li>can make you put on weight if you have too much sugar</li>
                                <li>can give you trouble sleeping if you have them at night</li>
                            </ul>
                        </div>
                        <div className="col-md food-box2 animated">
                            <h5>Eating and drinking the right things</h5>
                            <p>It can be hard to keep a healthy diet. Especially when there's a temptation to eat sweets and junk food. But it's important to get a balance in your diet of the right amount of each food group.</p>
                            <p>A balanced diet also includes drinks. Your body needs to stay hydrated to keep healthy. But think about what you drink. Caffeine and sugary drinks:</p>
                            <ul>
                                <li>can cause mood swings</li>
                                <li>affect your energy levels, feeling full of energy before a "sugar low" where you may feel tired and grumpy</li>
                                <li>can make you put on weight if you have too much sugar</li>
                                <li>can give you trouble sleeping if you have them at night</li>
                            </ul>
                        </div>
                    </div>
                    


                </div>
            </div>

            <Footer />

            <style jsx>{`
                body{
                    overflow-x: hidden;
                }
                .container-fluid{
                    background-color: #d8f1ea;
                    padding: 0;
                    color: white;
                }
                .row{
                    margin: 0;
                    padding: 40px 60px;
                }
                .bg1{
                    background-color: #7FD954;
                }
                .bg2{
                    background-color: #ff8c1a;
                }
                .bg3{
                    background-color: #7FD954;
                }
                .poly{
                    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
                    width: 100vw;
                    max-height: 50vh;
                    object-fit: cover;
                }
                .breaker1{
                    background: linear-gradient(-180deg, #7FD954, #7FD954, #ff8c1a, #ff8c1a);
                }
                .breaker2{
                    background: linear-gradient(-180deg, #ff8c1a, #ff8c1a, #7FD954, #7FD954);
                }
                .text-center{
                    text-align: center;
                    width: 100%;
                }
                h5, h2 {
                    font-family: 'Anton';
                }
                .hero-text{
                    background-color: rgba(0,0,0, 0.65);
                    background-position: center;
                    height: auto;
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    top: 35%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding-top: 10px;
                    padding-bottom: 10px;
                    color: white;
                }
                .hero-text h1{
                    font-family: bungee
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
                .food-box1, .food-box2{
                    margin-top: 20px;
                    padding: 60px;
                    box-shadow: 0 30px 55px 0 rgba(0, 0, 0, 0.3), 0 20px 20px 0 rgba(0, 0, 0, 0.15);
                }
                .food-box1{
                    margin-right: 10px;
                    background-color: #3399ff;
                }
                .food-box2{
                    margin-left: 10px;
                    background-color: #cc33ff;
                }
                .scroll-animations {
                    display: flex;
                }

                .scroll-animations div {
                    flex-grow: 1;
                    opacity: 0;
                }

                @media (max-width: 759px) {
                    .row{
                        padding: 40px 30px;
                    }
                    .scroll-animations {
                        display: block;
                    }
                    .food-box1, .food-box2{
                        margin: 15px 0;
                        padding: 15px 40px;
                    }
                }
            `}</style>
        </>
    );
}
