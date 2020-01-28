import Head from 'next/head';
import Hero from '../components/hero';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Benefits() {
    return (
        <>
            <Head>
                <title>Benifit</title>
            </Head>

            <Header />

            <Hero src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
            <h1>Hello, Welrd!</h1>


            <Footer />
            <style jsx>{`
                .h1 {
                    font-family: 'Roboto';
                }
            `}</style>
        </>
    );
}
