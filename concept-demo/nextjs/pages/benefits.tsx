import Head from "next/head";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Benefits() {
	return (
		<>
			<Head>
				<title>Benifit</title>
				<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" key="js-jquery3"></script>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" key="css-bootstrap4" />
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" key="js-bootstrap4"></script>
				<link href="https://fonts.googleapis.com/css?family=Anton|Bungee|Oswald&display=swap" rel="stylesheet" key="font-bungee" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" key="css-animate" />
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" key="css-fa" />
				<script async src="/static/js/scroll-left.js" />
                <script async src="/static/js/survey.js" />
                <link rel="stylesheet" href="/static/css/benefits.css" />
			</Head>

			<Header />
      
			<div className="top-header">
				<Hero src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style="height: 50vh;" alt="Unable to fetch image">
					<div className="hero-text">
						<h1>Stay healthy</h1>
						<hr />
						<p>Why should we stay healthy?</p>
					</div>
				</Hero>
			</div>
			<div className="container-fluid benefits">
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
				<div className="row bg3">
					<h2 className="text-center">Short survey</h2>
					<form className="mx-auto box">
						<fieldset className="animated" id="q1">
							<h5 className="survey">Hello! Please enter your name:</h5>
							<br />
							<div className="mx-auto question">
								<input id="q1-value" name="q1-value" required></input>
								<button type="button" className="next-btn" value="1">
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
								</button>
                                <p id="q1-error"></p>
							</div>
						</fieldset>
						<fieldset className="animated" id="q2">
							<h5 className="survey">Do you enjoy playing sport?</h5>
							<br />
							<div className="mx-auto question">
								<select className="interval-input" id="q2-value" name="q2-value" defaultValue="0" required>
									<option value="" disabled hidden></option>
									<option value="0">Of course</option>
									<option value="1">Yup</option>
									<option value="2">Ok la</option>
									<option value="3">Nope</option>
									<option value="4">Hell no</option>
								</select>
								<button type="button" className="next-btn" value="2">
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
								</button>
							</div>
						</fieldset>
						<fieldset className="animated" id="q3">
							<h5 className="survey">Do you think balance diet important?</h5>
							<br />
							<div className="mx-auto question">
								<select className="interval-input" id="q3-value" name="q3-value" defaultValue="0" required>
									<option value="" disabled hidden></option>
									<option value="0">Of course</option>
									<option value="1">Yup</option>
									<option value="2">Ok la</option>
									<option value="3">Nope</option>
									<option value="4">Hell no</option>
								</select>
								<button type="button" className="next-btn" value="3">
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
								</button>
							</div>
						</fieldset>
						<fieldset className="animated" id="q4">
							<h5 className="survey">How often you drink sugar drink per week?</h5>
							<br />
							<div className="mx-auto question">
								<select className="interval-input" id="q4-value" name="q4-value" defaultValue="0" required>
									<option value="" disabled hidden></option>
									<option value="0">0</option>
									<option value="1">1-3</option>
									<option value="2">4-6</option>
									<option value="3">7-10</option>
									<option value="4">More than 10</option>
								</select>
								<button type="button" className="next-btn" value="4">
									<i className="fa fa-arrow-right" aria-hidden="true"></i>
								</button>
							</div>
						</fieldset>
						<fieldset className="animated" id="q5">
                            <h5 className="survey" id="result-title">Hey</h5>
                            <p id="result"></p>
                            <br/>
                            <button type="reset" className="reset">Redo Survey</button>
                        </fieldset>
					</form>
				</div>
			</div>

			<Footer />
		</>
	);
}
