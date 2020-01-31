import Head from "next/head";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Benefits() {
	return (
		<>
			<Head>
				<title>Credit</title>
                <meta name="author" content="Tan Jia Shun"/>
                <meta name="description" content="Benifit"/>
                <script async src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
			    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
			    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
                <link rel="stylesheet" href="/static/css/programmes.css" />
                <link rel="stylesheet" href="/static/css/credit.css" />
            </Head>

            <Header />

            <div className="block-hero-wrapper">
                <Hero src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style="position: relative; height: 100vh;">
                    <div className="block-hero__backdrop" />
                    <div className="block-hero__textblock">
                        <div className="block-hero__textblock-group">
                            <h1 className="block-hero__title">Credit</h1>
                            <p className="block-hero__desc">And about our team</p>
                        </div>
                    </div>
                </Hero>

                <div className="block-hero-transitioner-wrapper">
                    <svg className="block-hero-transitioner" xmlns="http://www.w3.org/2000/svg" height="320px" width="100%" preserveAspectRatio="none" viewBox="0 0 1440 320">
                        <path fill="#00cba9" fillOpacity="1" d="M0,160L48,186.7C96,213,192,267,288,250.7C384,235,480,149,576,138.7C672,128,768,192,864,213.3C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
            <div className="container-fluid credit">
                <div className="title">
                    <h1>Our Team</h1>
                </div>
                <div className="row">
                    <div className="icon col-2">
                    <img src="/static/media/user1.jpg"></img>
                    </div>
                    <div className="info col">
                        <h3>Rifa Achrinza</h3>
                        <p>https://github.com/achrinza</p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
};