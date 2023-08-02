import { useState } from 'react';
import { Carousel }from 'react-bootstrap';

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
<<<<<<< HEAD
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>

      <Carousel.Item>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>

      <Carousel.Item>
         <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
      </Carousel.Item>
    </Carousel>
=======
            <Carousel activeIndex={index} onSelect={handleSelect} style={{background: 'grey', height: 'auto'}}>
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
>>>>>>> 98c43c7 (landing page in progress)
  );
}

export default Testimonial;