import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';
import Footer from '../components/footer';
export default function Homepage() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" key="font-roboto-500" />
                <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Ma+Shan+Zheng&display=swap" rel="stylesheet"></link>
                <meta name="author" content="Neo Say Ping"/>
                <meta name="description" content="Healthy activities"/>
                <title>Healthy Activities - Healthy.SG</title>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
            </Head>
            <Header/>
            <div className="hero-wrapper">
                <Hero src="/static/media/activities-header.jpg">
                    <div className="hero-text">
                        <h1> 
                            Activities
                            <br/>
                            Healthy Body, Healthy Mind
                        </h1>
                    </div>
                </Hero>
            </div>
            <div className="explaination">
                <h1>Why we should we take part in physical activities</h1>
                <p className="explanation-text">
                    Exercising has many benefits to our health as it prevents you from contracting diseases and health conditions, such as heart problems,<br/>
                    high blood pressure, high cholestrol and stroke. With trends of teenagers being overweight due to the lack of exercise, the government<br/>
                    is promoting Singaporeans to lead a more active lifestyle to prevent such trends.
                </p>
            </div>
            <h1>Activities to stay healthy</h1>
            <div className="container-fluid">
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
                        <h4>Exercises that can be done at Home</h4>
                        <p>For those of you that are feeling lazy to travel, you can also workout at home to keep yourself in shape</p>
                        <video width="550" height ="400" controls>
                            <source src="/static/media/exercises.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div>
                    <form>
                        <div className="mx-auto w-50">
                            <h4>How active are you</h4>
                            <fieldset>
                                <label>How often do you take part in physical activities:</label>
                                <select className="interval-input"  name="exercise-intervals">
                                    <option value="" disabled selected hidden> </option>
                                    <option value="Once a Day">Once a Day</option>
                                    <option value="Twice a Week">Twice a Week</option>
                                    <option value="Once a Week">Once a Week</option>
                                    <option value="Once every two weeks">Once every two weeks</option>
                                    <option value="Once a Month">Once a Month</option>
                                    <option value="Depending on Mood">Depending on Mood</option>
                                </select>
                            </fieldset>
                            <fieldset>
                                <label>How long is your exercise sessions:</label>
                                <select className="timing-input"  name="exercise-timings">
                                    <option value="" disabled selected hidden> </option>
                                    <option value="30 Mins">30 Mins</option>
                                    <option value="30 Mins to 1 hour">30 Mins to 1 Hour</option>
                                    <option value="1 hour to 1.5 Hours">1 hour to 1.5 Hours</option>
                                    <option value="1.5 Hours to 2 Hours">1.5 Hours to 2 Hours</option>
                                    <option value="More than 2 Hours">More than 2 Hours</option>
                                </select>
                            </fieldset>
                            <fieldset>
                            <label>How do you exercise:</label>
                                <input className="exercise-input" type="text" id = "exercises" name ="exercises"/>
                            </fieldset>
                            <fieldset>
                                <label>Which one of the above activities interest you?:</label>
                                <input className="interest-input" type="text" id = "interested" name ="interested"/>
                            </fieldset>
                            <fieldset>
                                <label>Do you exercise alone or with friends</label>
                                <select className="partner-input"  name="exercise-partners">
                                    <option value="" disabled selected hidden> </option>
                                    <option value="Alone">Alone</option>
                                    <option value="With Friends">With Friends</option>
                                    <option value="Dependin on activities">Depends on exercise</option>
                                </select>
                            </fieldset>
                            <fieldset>
                                <label>Last date of exercise:</label>
                                <input className="date-input"  type="date" name="date" />
                            </fieldset>
                            <br/>
                            <button className="button" type="submit" value="Submit">Submit</button>
                            <br/>
                            <p id="result"></p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <Footer/>

            <script dangerouslySetInnerHTML={{__html: `
                var interval = document.querySelector('input[name = exercise-intervals]:checked');
                var timing = document.querySelector('input[name = exercise-timings]:checked');
                var exercises = document.querySelector('input[name = exercises]');
                var interested = document.querySelector('input[name = interested]');
                var partner = document.querySelector('input[name = exercise-partners]:checked');
                var date = document.querySelector('input[name=date]');
                var exerciseInterval = ['Once a Day','Twice a Week','Once a Week','Once every two weeks','Once a Month','Depending on Mood'];
                var duration = ['Less than 30 Mins','30 Mins to 1 hour','1 Hour to 1.5 Hours','1.5 Hours to 2 Hours','More than 2 Hours'];
                date.max = new Date().toISOString().split('T')[0];
                var i;
                var count=0;

                function calc() {
                    var todaydate = new Date().toISOString().split('T')[0];
                    var diff = Math.ceil((todaydate.getTime() - date.getTime()) / (1000 * 3600 * 24))
                    for (i = 0; i < exerciseInterval.length; i++)
                    {
                        if (i<4)
                        {
                            count += 2;
                        }
                        else if (i == 4)
                        {
                            count += 1;
                        }
                    }
                    for (i = 0; i < duration.length; i++)
                    {
                        if (i<4)
                        {
                            count += 1;
                        }
                        else
                        {
                            count += 2;
                        }
                    }
                    if(diff > 7)
                    {
                        count+=2;
                    }
                    else if(diff > 7)
                    {
                        count+= 1;
                    }
                    else if (count > 14)
                    {
                        count+=0;
                    }
                    if (count < 4)
                    {
                        document.querySelector('#result').innerHTML = "You are inactive";
                    }
                    else if(count > 3)
                    {
                        document.querySelector('#result').innerHTML = "You are active";
                    }
                    else if (count == 5 )
                    {
                        document.querySelector('#result').innerHTML = "You are very active";
                    }

                }
                
                document.querySelector('form').addEventListener('submit', e => {
                    e.preventDefault();
                    exerciseInterval();
                }, false);
            `}} />

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
                    border-radius:15px; 
                    text-align:center;
                    font-size:20px;
                }
                .gyms{
                    font-family: 'Oswald', sans-serif;
                    border:5px solid green;
                    border-radius:15px;
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
                    text-align: center;
                    font-family: 'Oswald', sans-serif;
                    font-size:20px;
                    border-radius:15px;
                }
                .lessonsimg
                {
                    height:430px;
                }
                .home{
                    font-family: 'Oswald', sans-serif;
                    border:5px solid green;
                    border-radius:15px;
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

                .hero-wrapper {
                    position: relative;
                }

                .hero-text {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    align-items: center;
                    text-align:center;
                }
                .hero-text h1{
                    font-family: 'Ma Shan Zheng', cursive;
                    text-align: center;
                    background-color: rgba(64,64,64, .8);
                    color:white;
                    font-size:60px;
                    flex-grow: 1;
                }
                form {
                    padding :30px;
                    border-radius: 25px;
                    border: 5px dotted black;
                    background-color: #f2f2f2;
                    content-align:center;
                }
                .form input[type=submit]:hover {
                    background-color: #45a049;
                }
                .exercise-input
                {
                    display:block;
                    width:50%;
                }
                .interest-input{
                    display:block;
                    width:50%;
                }
                .partner-input{
                    display:block;
                    width:50%;
                }
                .interval-input{
                    display:block;
                    width:50%;
                }
                .date-input{
                    display:block;
                    width:50%;
                }
                .timing-input{
                    display:block;
                    width:50%;
                }
                .button{
                    border:2px solid #45a049;
                    border-radius:10px;
                    display:block;
                    width:50%;
                    background-color:#45a049;
                }

            `}</style>
        </>
    );
}
