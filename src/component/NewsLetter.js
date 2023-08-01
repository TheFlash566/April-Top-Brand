import { Link } from "react-router-dom";

const NewsLetter = () => {
    return (
        <div className="newsLetter" style={{background: 'whitesmoke', height: 'auto'}}>
            <div style={{width: '90%', margin: 'auto', paddingTop: '4em', paddingBottom: '4em'}}>
                <div style={{display: 'flex', gap: '4em'}}>
                    <div>
                        <h3 className="nl-h3">Call Our Support</h3>
                        <p className="nl-p">24 / 7 Support Line :  +1(21) 234 557 4567</p>
                    </div>

                    <div>
                        <h3 className="nl-h3">Our Location</h3>
                        <p className="nl-p">Shipper, #2214 Honey street, NY - 62617.</p>
                    </div>

                    <div>
                        <h3 className="nl-h3">Our Newsletter</h3>
                        <div className="nl-p" style={{display: 'flex', gap: '1em'}}>
                            <input type='email' placeholder="Email Address" style={{borderRadius: '5px', textIndent: '1.5em', height: '50px'}}/>
                            <Link style={{padding: '18px 25px', background: '#0855e0', color: 'white', borderRadius: '5px', 
                            height: '50px', width: '10rem', textAlign: 'center'}}>Subscribe</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;