import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';

export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"/>
                <meta name="author" content="Neo Say Ping"/>
                <meta name="description" content="Healthy activities"/>
                <title>Healthy Activities - Healthy.SG</title>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
            </Head>
            <Hero src="/static/media/activities-header.jpg"/>
            <body>
                <div className="explaination">
                    <h1>Why we should we take part in physical activities</h1>
                    <p className="explanation-text">
                        Exercising has many benefits to our health as it prevents you from contracting diseases and health conditions, such as heart problems,<br/>
                        high blood pressure, high cholestrol and stroke. With trends of teenagers being overweight due to the lack of exercise, the government<br/>
                        is promoting Singaporeans to lead a more active lifestyle to prevent such trends.
                    </p>
                </div>
                <h1>Activies to stay healthy</h1>
                <div className="block-section-wrapper">
                    <div className="courts">
                        <h2>Sports</h2>
                        <p>Play sports with friends</p>
                        <p>There are often free facilicites such as, Basketball courts, Badminton courts, football fields or swimming pools that are available for anyone.
                            These facilities can be found in stadiums, neighbourhoods or in schools, for free and available for use during the weekends.
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
                                    <img src="/static/media/swimming-pool.jpg" className="d-block w-100" alt="..." />
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
                        <h3>Workouts</h3>
                        <p>Go to the gym</p>
                        <p>Most stadiums in Singapore has gyms that are available for Singaporeans to use for free</p>
                        <img className="img" src="/static/media/gym.jpg" />
                    </div>
                    <div className="lessons">
                        <h4>Fitness lessons</h4>
                        <p>For people that do not like working out in the gym or playing sports, Community Centres or stadiums often have lessons, such as aerobics, yoga or zumba lessons that you can sign up for at a low cost
                            As there are a wide variety of what they offer, there will alwways be something that suit your age and what you want.
                        </p>
                        <img className="lessonsimg" src="/static/media/lessons.png"/>
                    </div>
                    <div className="home">
                        <h4>Excerxises that can be done at Home</h4>
                        <p>For those of you that are feeling lazy to travel, you can also workout at home to keep yourself in shape</p>
                        <video width="550" height ="400" controls>
                            <source src="/static/media/exercises.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <form>
                            
                        </form>
                    </div>
                </div>
            </body>

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
                .explanation-text
                {
                    background-color: #33D2FF;
                }
                .size{
                    width : 80%;
                }
                .courts{
                    font-family: 'Oswald', sans-serif;
                    border:5px solid green;
                    width: 50%;
                    float:left;
                    text-align:center;
                    font-size:20px;
                }
                .gyms{
                    font-family: 'Oswald', sans-serif;
                    border:5px solid green;
                    width:50%;
                    float: left;
                    text-align:center;
                    font-size:20px;
                }
                .img{
                    height:480px;
                }
                .explaination{
                    text-align:center;
                    font-family: 'Bebas Neue', cursive;
                    font-size:30px;
                }
                .lessons{
                    border:5px solid green;
                    width:50%;
                    text-align: center;
                    font-family: 'Oswald', sans-serif;
                    font-size:20px;
                    float:left;
                }
                .lessonsimg
                {
                    height:430px;
                }
                .home{
                    font-family: 'Oswald', sans-serif;
                    border:5px solid green;
                    text-align:center;
                    font-size:20px;
                }

                .block-section-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                }

                .block-section-wrapper > * {
                    flex-basis: 50%;
                    flex-grow: 1;
                }
            `}</style>
        </>
    );
}
