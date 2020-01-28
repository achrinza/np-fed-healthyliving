import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <meta name="author" content="Neo Say Ping"/>
                <meta name="description" content="Healthy activities"/>
                <title>Healthy Activities - Healthy.SG</title>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
            </Head>
            <Hero src="/static/media/activities-header.jpg"/>
            <div>
                <h1>Why we should we take part in physical activities</h1>
                <p>
                    Exercising has many benefits to our health 
                </p>
            </div>
            <h1>Activies to stay healthy</h1>
            <div className="courts">
                <h2>Sports</h2>
                <p>You can meet up with friends during your free time to play sports at facilities near you</p>
                <p>There are often free facilicites such as, Basketball courts, Badminton courts or football fields, that are available for anyone.<br/>
                    These facilities can be found in stadiums, neighbourhoods or in schools.
                </p>
                <div id="carouselExampleIndicators" className="carousel slide size mx-5"  data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/static/media/facilities1.jpeg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/media/badminton.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/media/basketball.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/static/media/football.jpg" className="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="gyms">
                <h3>Workout</h3>
                <p>Go to the gym or exercise on your own</p>
                <p>Most stadiums in Singapore have a gyms or swimming pools managed by ActiveSG where it is cheap or free for Singapore Citizens to use and they also hold activities that you can take part in</p>
                <img className="img" src="/static/media/swimming-pool.jpg" />
            </div>

            <style jsx>{`
                h1 {
                    font-family: 'Roboto';
                    text-align: center;
                    background-color:brown;
                    color:white;
                }
                slideshow-container {
                    max-width: 1000px;
                    position: relative;
                    margin: auto;
                }
                .size{
                    width : 80%;
                }
                .courts{
                    border:3px solid green;
                    width: 50%;
                    float:left;
                    text-align:center;
                }
                .gyms{
                    border:3px solid green;
                    width:50%;
                    float: left;
                    text-align:center;
                }
                .img{
                    height:480px;
                }
            `}</style>
        </>
    );
}
