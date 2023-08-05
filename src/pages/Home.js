import Banner from "../component/Banner";
import Sponsors from "../component/Sponsors";
import WhoWeAre from "../component/WhoWeAre";
import WhatWeDo from "../component/WhatWeDo";
import WhyUs from "../component/WhyUs";
import OurStats from "../component/OurStats";
import OurProject from "../component/OurProject";
import Testimonial from "../component/Testimonial";
import InsightsAndTrends from "../component/InsightsAndTrends";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <Sponsors />
            <WhoWeAre />
            <WhatWeDo />
            <WhyUs />
            <OurStats />
            <OurProject />
            <Testimonial />
            <InsightsAndTrends />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;



// googleFontLoader
// import GoogleFontLoader from 'react-google-font-loader';

// Somewhere in your React tree:

// <GoogleFontLoader
//     fonts={[
//         {
//             font: 'Bungee Inline',
//             weights: [400],
//         },
//     ]}
// /> 

// google font in css 
// body {
//     font-family: 'Bungee Inline', cursive;
// }