import React, { useState, useRef } from 'react';
import './LoungeFinderComponent.css';
import { indiaGate, city, taj, hall, kitchen, Fountain } from '../../images';

const LoungeFinderComponent = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleButtonClick = () => {
        setIsVideoPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const lounges = [
        {
            image: indiaGate, // Replace with the actual image path
            name: 'Indra Gandhi Int’l',
            location: 'IGI • New Delhi',
            otherImage: Fountain
        },
        {
            image: city, // Replace with the actual image path
            name: 'Indra Gandhi Int’l',
            location: 'IGI • New Delhi',
            otherImage: hall

        },
        {
            image: taj, // Replace with the actual image path
            name: 'Indra Gandhi Int’l',
            location: 'IGI • New Delhi',
            otherImage: kitchen
        },
    ];



    return (
        <div className="lounge-container" onClick={handleButtonClick}>
            <div className="background-video-container-lounge">
                <video ref={videoRef} muted loop className="background-video-lounge">
                    <source src="https://s3-figma-videos-production-sig.figma.com/video/1075329090537993606/TEAM/4a87/5471/-2e2f-4bd2-a753-22c11196b9a9?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWSfcjV8eTYmjMJ11hxnGvusIB88HfmsArYR8KZ3tBlXBxxkoVYy0ZQsyVm1c130KC5ogD6iNVDn1q-Ni2T0mjlKAI9QRBn9EJWfDnTjgFpI~5QCak-j0sHX1X1~H~tu4EXYOKqhZF6MUDjWng5rg7YLQ23y86hZoR5jUZtiLq0ofSzoa5Z9G445xezFIHL57MaiSnCgfanwjPvpP0uTVPoyjgvFtSEayCJPuIcgk-U5eaTxEiu8Lm7LKX4my8guSYHI~SzTm8Nu08BxDQWz1wCls~6FP72rSxA2IgVhekVlkgIPk6P8bclE2oP8ED3jwmtnP4y5DcVCnyghjZQCeQ__" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Title Section */}
            <div className="title-section">
                <h1 className="title">Lounge Finder</h1>
                <p className="subtitle">Check which lounges you can access at a click!</p>
                <button className="button-cards">Try Lounge Finder</button>
            </div>


            {/* Lounges Section */}
            <div className="lounge-section">
                {lounges.map((lounge, index) => (
                    <div key={index} className="lounge">
                        <div className='lounge-data'>
                            <img src={lounge.image} alt={lounge.name} className="lounge-image" />
                            <div className='lounge-details'>
                            <p className="lounge-name">{lounge.name}</p>
                            <p className="lounge-location">{lounge.location}</p>
                            </div>
                        </div>
                        <img src={lounge.otherImage} alt={lounge.name} className="lounge-other-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoungeFinderComponent;
