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
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import "bootstrap/dist/css/bootstrap.min.css"
>>>>>>> 98c43c7 (landing page in progress)


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