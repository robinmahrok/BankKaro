import React from 'react';
import './CreditCardSection.css'; // Import your CSS file for styling
import { PO, ER, CC, MB, RegeliaCC, CK, BMC, CC2, LF } from '../../images';

const CreditCardSection = () => {
  return (
    <>
    <section className="credit-card-section">
      <div className="hero-section">
      <div className='creditCardText'>
          <h1>We find the Best<br></br>Credit Cards for You</h1>
          <button className="cta-button">Find A Credit Card</button>
        </div>
        <div className='cardRegelia'>
          <img alt="Personalised Offers" src={RegeliaCC}></img>
        </div>
        <div className="background-video-container">
          <video autoPlay muted loop className="background-video">
            <source src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/13ff/3422/-d3eb-4e5e-bba0-ee57afbda338?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i5fQUwuaxBcQ7llTZG3oNJ3-7hwI7HuicI7IXYIOK-TJum9CwJSEWguF5tae9mumTR6fpJBcntv-IRCXne6V9pTwqiYsZrWEDD0x4mdpsfgJ~QlUQZmK3xZfS~V-Uq0~Y~teBqlInk6fQd5UuA4P8pzD09KpaYL9XSgMwACnqVRFZ-dLzd0cN4n8E99l5sW~N9uADgMXL3ttv9ad7HTkW-jvh5QGX5AdCp-fq-1Aj~JwmBlm17xJD927kLWfDAz7pNmEqhrpfHNGwg8Ccs5YzwlT03tMdp4e7h0MCnbAoS-kO5nC0aaPmhh-Vk0RnmIX-OIBDZWc2-azSC4-BSAh0Q__" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
      <div className="features-section">
        <div className="feature-card">
          <img src={PO} alt="Personalised Offers" />
          <h3>Personalised Offers</h3>
          <p>Find best Credit Cards based on your spend pattern.</p>
        </div>
        <div className="feature-card">
          <img src={ER} alt="Earn Rewards" />
          <h3>Earn Rewards</h3>
          <p>Earn Rewards for every successful Credit Card approval.</p>
        </div>
        <div className="feature-card">
          <img src={CC} alt="Compare Cards" />
          <h3>Compare Cards</h3>
          <p>Compare your existing Cards with best in the industry.</p>
        </div>
        <div className="feature-card">
          <img src={MB} alt="Max Benefits" />
          <h3>Max Benefits</h3>
          <p>Get maximum benefits from your Credit Cards.</p>
        </div>
      </div>
      <div className='credit-list'>
        <div className='card1'>
          <img width={'100%'} src={CK} alt="Personalised Offers"></img>
        </div>
        <div className='card2'>
          <img width={'100%'} src={BMC} alt="Personalised Offers"></img>
        </div>
        <div className='card3'>
          <img width={'100%'} src={CC2} alt="Personalised Offers"></img>
        </div>
        <div className='card4'>
          <img width={'100%'} src={LF} alt="Personalised Offers"></img>
        </div>
      </div>
      </>
  );
};

export default CreditCardSection;
