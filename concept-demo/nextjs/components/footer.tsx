import Head from 'next/head';

export function GlobalStyles() {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto:500&display=swap" rel="stylesheet" key="font-roboto-500" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:700&display=swap" rel="stylesheet" key="font-roboto-700" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:900&display=swap" rel="stylesheet" key="font-roboto-900" />

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous" key="js-jquery3" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" key="css-bootstrap4" />
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous" key="js-bootstrap4" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" key="css-font-awesome" />
            </Head>

            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </>
    )
}

export default function Footer() {
    return (
        <>
            <GlobalStyles />
            <style jsx>{`
                footer {
                    background-color: black;
                    padding: 10px 40px;
                    color: grey;
                    text-align: center;
                }
                footer .title{
                    color: white;
                    font-weight: bold;
                }
                footer a{
                    color: grey;
                }
                footer hr{
                    margin: 10px auto;
                    width: 80%;
                    border: 0;
                    height: 1px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
                }
                .copyright{
                    margin: 0;
                    font-size: 12px;
                    width: 100%;
                }
                i{
                    vertical-align: middle !important; 
                }
                footer button{
                    margin-left: 15px;
                }
            `}</style>
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <p className="title">Useful Sites</p>
                        <hr/>
                        <p><a href="https://www.healthhub.sg/">Health Hub</a></p>
                        <p><a href="https://www.healthhub.sg/">Health Hub</a></p>
                        <p><a href="https://www.healthhub.sg/">Health Hub</a></p>
                    </div>
                    <div className="col-md">
                        <p className="title">Contact Us</p>
                        <hr/>
                        <p><i className="material-icons">home</i> Healthy SG</p>
                        <p>Chicken Dinner Road</p>
                        <p>Street 44 #99-999</p>
                        <p><a href="tel:999-999-999"><i className="material-icons">phone</i> 999-999-999</a></p>
                        <a href="emailto:Healthy@sg.com"><i className="material-icons">email</i>    Healthy@sg.com</a>
                    </div>
                    <div className="col-md">
                        <p className="title">Subscrible for latest news</p>
                        <hr/>
                        <form>
                            <input type="email" className="email"></input>
                            <button type="submit">SUBSCRIBLE</button>
                        </form>
                    </div>
                </div>
                <div className="row w-100">
                    <hr/>
                    <p className="copyright">Copyright &copy; 2020 Healthy SG</p>
                </div>
            </footer>
        </>
    )
}
