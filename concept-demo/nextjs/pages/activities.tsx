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
                <link href="https://fonts.googleapis.com/css?family=Acme&display=swap" rel="stylesheet"/>
                <meta name="author" content="Neo Say Ping"/>
                <meta name="description" content="Healthy activities"/>
                <title>Healthy Activities - Healthy.SG</title>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
                <script async defer src="/static/js/activities-form.js" />
                <link rel="stylesheet" href="/static/css/activities.css"/>
            </Head>
            <Header/>
            <div className="hero-wrapper">
                <Hero  className="heroimg" src="/static/media/activities-header.jpg" style="height: 50vh;">
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
                <h1 className="explainh1">Why we should we take part in physical activities</h1>
                <p className="explanation-text">
                    Exercising has many benefits to our health as it prevents you from contracting diseases and health conditions, such as heart problems,<br/>
                    high blood pressure, high cholestrol and stroke. With trends of teenagers being overweight due to the lack of exercise, the government<br/>
                    is promoting Singaporeans to lead a more active lifestyle to prevent such trends.
                </p>
            </div>
            <h1 className="explainh1">Activities to stay healthy</h1>
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
                        <h2>Workouts</h2>
                        <p>Go to the gym</p>
                        <p>Most stadiums in Singapore has gyms that are available for Singaporeans to use for free</p>
                        <img className="img" src="/static/media/gym.jpg" />
                    </div>
                    <div className="lessons">
                        <h2>Fitness lessons</h2>
                        <p>For people that do not like working out in the gym or playing sports, Community Centres or stadiums often have lessons, such as aerobics, yoga or zumba lessons that you can sign up for at a low cost
                            As there are a wide variety of what they offer, there will alwways be something that suit your age and what you want.
                        </p>
                        <img className="lessonsimg" src="/static/media/lessons.png"/>
                    </div>
                    <div className="home">
                        <h2>Exercises that can be done at Home</h2>
                        <p>For those of you that are feeling lazy to travel, you can also workout at home to keep yourself in shape</p>
                        <video width="550" height ="400" controls>
                            <source src="/static/media/exercises.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="exercise-amount">
                    <h2>Reccomended amount of exercise</h2>
                    <p>
                        Your level of activity is mostly based on your heart rate and breathing rate, to know what intensity of exercises you are doing, it all depends on your heart rate.<br/>
                    </p>
                    <ul className="heartrate">
                        <li>Moderate-intensity: Heart rate would be about 50% to 70% of you maximum heart rate.</li>
                        <li>Vigorous-intensity: Heart rate would be about 70% to 85% of your maximun heart rate</li>
                    </ul>
                    <p>                            
                        For people of aged 18-64 with no health conditions, reccommended amount of exercise a week is:</p>
                    <ul className="exercise-timings">
                        <li>150 minutes of moderate intensity exercise a week(e.g.,Brisking Walking,Cycling,leiusure swimming)</li>
                        <li>75 minutes of vigorous intensity exercise a week(e.g.,Jogging,Skipping Rope,Basketball,Football)</li>
                    </ul>
                    <p>It is reccommended to achieve one in order to achieve the benefits but if you manage to achieve both, it is best for your health as you will be able to better achieve the following</p>
                    <ul className="benefits">
                        <li>Lower risk of coronary heart disease, high blood pressure, stroke, type 2 diabetes, depression</li>
                        <li>Achieve muscular fitness and higher level of cardiorespiratory</li>
                        <li>Achieve weight management, better body composition ratios and healthier body mass</li>
                    </ul>
                    <form className="heartrateform">
                        <h4>Find out your maximun heart rate</h4>
                        <label>What is your age : </label>
                        <input className="age" type="number" id = "age" name ="age" min="1" max="100"/>
                        <div>
                            <p id="heartrate"></p>
                            <p id="mintensity"></p>
                            <p id="vintensity"></p>

                        </div>
                    </form>
                </div>
                <div>
                    <form className="response">
                        <div className="mx-auto w-50">
                            <h4>How active are you?</h4>
                            <fieldset>
                                <label>How often do you take part in physical activities:</label>
                                <select className="interval-input"  name="exercise-intervals" required>
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
                                <select className="timing-input"  name="exercise-timings" required>
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
                                <input className="exercise-input" type="text" id = "exercises" name ="exercises" required/>
                            </fieldset>
                            <fieldset>
                                <label>Which one of the above activities interest you?:</label>
                                <input className="interest-input" type="text" id = "interested" name ="interested" required/>
                            </fieldset>
                            <fieldset>
                                <label>Do you exercise alone or with friends</label>
                                <select className="partner-input"  name="exercise-partners" required>   
                                    <option value="" disabled selected hidden> </option>
                                    <option value="Alone">Alone</option>
                                    <option value="With Friends">With Friends</option>
                                    <option value="Dependin on activities">Depends on exercise</option>
                                </select>
                            </fieldset>
                            <fieldset>
                                <label>Last date of exercise:</label>
                                <input className="date-input"  type="date" name="date" required/>
                            </fieldset>
                            <br/>
                            <button className="button" type="button" value="Submit">Submit</button>
                            <br/>
                            <p id="result"></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>

            <style jsx>{`
                // h1 {
                //     font-family: 'Acme', sans-serif;
                //     font-size:50px;
                //     text-align: center;
                //     background-color:brown;
                //     color:white;
                // }
                // h2{
                //     text-align:center;
                // }
                // slideshow-container {
                //     max-width: 1000px;
                //     position: relative;
                //     margin: auto;
                // }
                // .explanation-text
                // {
                //     background-color: #33D2FF;
                // }
                // .size{
                //     width : 80%;
                // }
                // .courts{
                //     font-family: 'Oswald', sans-serif;
                //     border:5px solid green;
                //     border-radius:15px; 
                //     text-align:center;
                //     font-size:20px;
                // }
                // .gyms{
                //     font-family: 'Oswald', sans-serif;
                //     border:5px solid green;
                //     border-radius:15px;
                //     text-align:center;
                //     font-size:20px;
                // }
                // .img{
                //     height:480px;
                // }
                // .explaination{
                //     text-align:center;
                //     font-family: 'Bebas Neue', cursive;
                //     font-size:30px;
                // }
                // .lessons{
                //     border:5px solid green;
                //     text-align: center;
                //     font-family: 'Oswald', sans-serif;
                //     font-size:20px;
                //     border-radius:15px;
                // }
                // .lessonsimg
                // {
                //     height:430px;
                // }
                // .home{
                //     font-family: 'Oswald', sans-serif;
                //     border:5px solid green;
                //     border-radius:15px;
                //     text-align:center;
                //     font-size:20px;
                // }
                // .exercise-amount
                // {
                //     font-family: 'Oswald', sans-serif;
                //     border:5px solid green;
                //     border-radius:15px;
                //     font-size:20px;
                //     width:100%;
                //     text-align:center;
                // }

                // .exercise-amount > ul, .exercise-amount > ol {
                //     display: flex;
                //     flex-direction: column;
                //     align-items: center;
                // }
                // .age{
                //     padding:3px;
                //     width:25%;
                // }
                // .exercise-timings{
                //     list-style-type:disc;
                // }
                // .heartrate{
                //     list-style-type:disc;
                //     content-align:center;
                // }
                // .benefits{
                //     list-style-type:decimal;
                //     content-align:center;
                // }
                // .block-section-wrapper {
                //     display: flex;
                //     flex-wrap: wrap;
                // }

                // .block-section-wrapper > * {
                //     flex-basis: 50%;
                //     flex-grow: 1;
                // }

                // .hero-wrapper {
                //     position: relative;
                // }

                // .hero-text {
                //     position: absolute;
                //     top: 0;
                //     bottom: 0;
                //     left: 0;
                //     right: 0;
                //     display: flex;
                //     align-items: center;
                //     text-align:center;
                // }
                // .hero-text h1{
                //     font-family: 'Ma Shan Zheng', cursive;
                //     text-align: center;
                //     background-color: rgba(64,64,64, .8);
                //     color:white;
                //     font-size:80px;
                //     flex-grow: 1;
                // }
                // .response {
                //     margin-top:10px;
                //     margin-bottom :10px;
                //     padding :10px;
                //     border-radius: 25px;
                //     border: 5px solid black;
                //     background-color: #f2f2f2;
                //     content-align:center;
                //     width:80%;
                //     margin-left:10%;
                // }
                // .heartrateform {
                //     padding :50px;
                //     border-radius: 25px;
                //     border: 5px dotted black;
                //     background-color: #f2f2f2;
                //     content-align:center;
                //     width:60%;
                //     margin-left:20%;
                //     margin-bottom:20px;
                // }
                // .form input[type=submit]:hover {
                //     background-color: #45a049;
                // }
                // .exercise-input
                // {
                //     display:block;
                //     padding:3px;
                //     width:100%;
                // }
                // .interest-input{
                //     display:block;
                //     width:100%;
                //     padding:3px
                // }
                // .partner-input{
                //     display:block;
                //     width:100%;
                //     padding:3px
                // }
                // .interval-input{
                //     display:block;
                //     width:100%;
                //     padding:3px
                // }
                // .date-input{
                //     display:block;
                //     width:100%;
                //     padding:3px
                // }
                // .timing-input{
                //     display:block;
                //     width:100%;
                //     padding:3px
                // }
                // .button{
                //     border:2px solid #45a049;
                //     border-radius:10px;
                //     display:block;
                //     width:100%;
                //     background-color:#45a049;
                // }

            `}</style>
        </>
    );
}
