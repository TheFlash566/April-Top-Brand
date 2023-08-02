import { Carousel }from 'react-bootstrap';

function Testimonial() {
  return (

            <div >
                <Carousel style={{background: 'grey', height: 'auto',}}>
                    <Carousel.Item>
                        <div style={{display: 'flex', gap: '4em', width: '90%',
                            margin: 'auto', paddingBottom: '10em', paddingTop: '10em'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className="t_p">
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
                                <div style={{display: 'flex', gap: '1.5em'}}>
                                    <div style={{width: '70px', height: '70px', borderRadius: '50%', background: 'darkRed'}}></div>
                                    <div style={{marginTop: '12px'}}>
                                        <h5>AHMED ADISA</h5>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className="t_p">
                                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                    Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
                                <div style={{display: 'flex', gap: '1.5em'}}>
                                    <div style={{width: '70px', height: '70px', borderRadius: '50%', background: 'darkRed'}}></div>
                                    <div style={{marginTop: '12px'}}>
                                        <h5>AHMED ADISA</h5>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div style={{display: 'flex', gap: '4em', width: '90%',
                            margin: 'auto', paddingBottom: '10em', paddingTop: '10em'}}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className="t_p">
                                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
                                <div style={{display: 'flex', gap: '1.5em'}}>
                                    <div style={{width: '70px', height: '70px', borderRadius: '50%', background: 'green'}}></div>
                                    <div style={{marginTop: '12px'}}>
                                        <h5>AHMED ADISA</h5>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <p className="t_p">
                                    Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                    Semper at tempufddfel.Pellen tesque libero ut justo, ultrices in ligula.</p>
                                <div style={{display: 'flex', gap: '1.5em'}}>
                                    <div style={{width: '70px', height: '70px', borderRadius: '50%', background: 'green'}}></div>
                                    <div style={{marginTop: '12px'}}>
                                        <h5>AHMED ADISA</h5>
                                        <p>Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
  );
}

export default Testimonial;