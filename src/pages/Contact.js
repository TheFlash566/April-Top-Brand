import ContactBanner from "../component/ContactBanner";
import SendMessage from "../component/SendMessage";
import Footer from "../component/Footer";

const Contact = () => {
    return (
        <div className="Contact">
            <ContactBanner />
            <SendMessage />
            <Footer />
        </div>
    )
}

export default Contact;