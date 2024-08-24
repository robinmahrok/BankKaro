import React from 'react';
import './ImpactComponent.css';  // Import the CSS file
import { ratantata } from '../../images';

const ImpactComponent = () => {
    return (
        <div className="impact-container">
            <div className="impact-heading">
                <p className="impact-subtitle">WHAT THEY SAY ABOUT BANKKARO</p>
                <h1 className="impact-title">
                    See the <span className="highlight-2">Impact</span> in action
                </h1>
            </div>

            {/* Images Section */}
            <div className="images-section">
                <div className="background-video-container-impact">
                    <video autoPlay muted loop className="background-video-impact">
                        <source src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/d4ff/89b0/-465c-4a49-ab02-0a949552ef7d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orNiOHGAk24H~uVhZlXnOEak4ONXBtSXY1jHve5fmU6SJUapghJyCadc0G68lImt0N6NC~MA2OvOX6pBuMqg-jqVEFKv8-4HWbFTsNsBpbeeIxCjH0TDnqlR6XFz7B4cPSOSI6hJ8ebDMcH8CpJT0L43iqpKMgbm4npRZui-PQ5s0Gr4MzwdKpUADnIF8f7I1k2rwA3TfnjihkoDihWQhTbJmkSuy1pTrLTLiwTGjo0T8-qXUXEVwjaaR46702eKPei~lpzKosvuetWQaB685-0bE4l7y8Sia9yCQWXUV-y-7J8F1AIlsJYIP-D12m-iEZ3kmWo2l6rb~oCTGf9Q2w__" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <img src={ratantata} alt="Ratan Tata" className="person-image" />
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section">
                <div className="testimonial-author">
                    <strong>Ratan Tata</strong><br />
                    Chairperson Tata Group
                </div>
                <blockquote className="testimonial-text">
                    "BankKaro helped me find the perfect credit card that matches my spending on groceries and travel.
                    Highly recommend it for personalized credit card options."
                </blockquote>
            </div>
        </div>
    );
};

export default ImpactComponent;
