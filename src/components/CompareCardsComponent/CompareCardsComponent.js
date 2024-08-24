import React from "react";
import "./CompareCardsComponent.css"; // Include this CSS file in your project
import { sbi, hsbc, podium, amex, clipPolygon } from '../../images';

const CompareCardsComponent = () => {
    return (
        <div className="compare-cards-container">
            {/* Title Section */}
            <div className="background-video-container-compare">
                <video autoPlay muted loop className="background-video-compare">
                    <source src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/d048/1e88/-72f6-475d-82f5-951ac1f66b29?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmeR7YpprPHyyFSmbQtZ9VNCVTP9gUgl~O3x8oDi-GbMRfg0IE~ITvJ0CztkoJpJN4FG7hv5~m50hGUhDhXG5Qb8INLrtyLFwoPIYrWGjb8aOqEcYPAHuxbCpmN9XTzIJl8sF0KfMZ9nwLr3b~~9-47t3z53yWUEivWNxcyTYGhQr-h-G21tfblP00XhLvviSXXT-DFcgHR~jcRlUAqHpWHVv62a0r0k5aB-ODXZI9ZJcc1Y~C9Egr3E2rxWqlHg9hvOzFaIKNNOlennyFewVcPTIgkrn3B9qoz1cYKKriWqLYW8deojRLVidjAM44vU8eejfM5rVtlWfUb6y3oJXA__" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Decorative Centerpiece */}
            <h1 className="compare-title">Compare Cards</h1>
            <div className="centerpiece-container">
                {/* <div className="centerpiece"> */}
                <img
                    src={podium}
                    alt="podium Card"
                    className=" poduim-card"
                />
                {/* </div> */}

                {/* Cards Section */}
                <div className="cards-container">
                    <img
                        src={hsbc}
                        alt="HSBC Card"
                        className="cards hsbc-card"
                    />
                    <img
                        src={amex}
                        alt="American Express Card"
                        className="cards amex-card"
                    />
                    <img
                        src={sbi}
                        alt="Visa Card"
                        className="cards visa-card"
                    />
                </div>
            </div>
            <div className="podium-mesh-container">
                <div className="mesh-grid-container">
                    <div className="mesh-grid">
                        {/* Create a grid with multiple tiles */}
                        {Array(20).fill(0).map((_, index) => (
                            <div key={index} className="mesh-tile"></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="banner">
                <p className = "text">
                    Uncover hidden benefits and find the <br /> perfect card for your financial goals.
                </p>
                <button className="button-cards">Compare Cards</button>
            </div>

        </div>
    );
};

export default CompareCardsComponent;
