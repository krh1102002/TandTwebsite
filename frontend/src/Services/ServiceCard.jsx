import React from 'react';
import './Services-card.css'
const ServiceCard = ({item}) => {
    const {imgUrl,title,desc}=item
    return (
        <div className="service__item mb-md-0 mb-3">
            <div className="service__img">
                <img src={imgUrl} alt="Services Img" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default ServiceCard;