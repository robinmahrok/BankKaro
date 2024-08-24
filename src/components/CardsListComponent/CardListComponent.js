import React from 'react';
import './CardListComponent.css'; // Import your CSS file for styling
import { regelia2, oil, axis } from '../../images';

const CardListComponent = () => {
    const cardData = [
        {
            bank: "HDFC Regalia",
            image: regelia2,
            cashback: "50% Cashback",
            categories: ["Travel", "Online Shopping"],
            info: "High cashback on online and offline spends"
        },
        {
            bank: "Axis Bank Ace Credit Card",
            image: axis,
            cashback: "50% Cashback",
            categories: ["Travel", "Online Shopping"],
            info: "High cashback on online and offline spends"
        },
        {
            bank: "Indian Oil HDFC Credit Card",
            image: oil,
            cashback: "50% Cashback",
            categories: ["Travel", "Online Shopping"],
            info: "High cashback on online and offline spends"
        },
    ];
    return (
        <div className="credit-card-section-updated">
<div class="layered-rectangles">
    <div class="rectangle up"></div>
    <div class="rectangle center"></div>
    <div class="rectangle down"></div>
    <div class="rectangle inner"></div>
    <div class="rectangle outer"></div>

</div>
<div class="layered-rectangles-right">
    <div class="rectangle-right up-right"></div>
    <div class="rectangle-right center-right"></div>
    <div class="rectangle-right down-right"></div>
    <div class="rectangle-right inner-right"></div>
    <div class="rectangle-right outer-right"></div>

</div>
            <h2 style={{ textAlign: "center" }}>Popular credit cards for every<br /> dedicated category</h2>
            <div className="filter-buttons">
                <button className='selected'>Featured</button>
                <button>Cashback</button>
                <button>Rewards</button>
                <button>Fuel</button>
                <button>Business</button>
            </div>
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <div key={index} className={`card${index}`}>
                        <img src={card.image} alt={card.bank} className="card-image" />
                        <h3 className='cardDetails'>{card.bank}</h3>
                        <div className="card-categories">
                            {card.categories.map((category, index) => (
                                <span key={index} className="card-category">{category}</span>
                            ))}
                        </div>
                        <p className="cashback">{card.cashback}</p>
                        <p>{card.info}</p>
                        <a href="#" className="apply-now">Apply Now →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardListComponent;
