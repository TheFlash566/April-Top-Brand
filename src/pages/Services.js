import ServiceBanner from "../component/ServiceBanner";
import WhatWeDo from "../component/WhatWeDo";
import OurSkills from "../component/OurSkills";
import OurPlans from "../component/OurPlans";
import Footer from "../component/Footer";


const Services = () => {
    return (
        <div className="Services">
            <ServiceBanner />
            <WhatWeDo />
            <OurSkills />
            <OurPlans />
            <Footer />
        </div>
    )
}

export default Services;