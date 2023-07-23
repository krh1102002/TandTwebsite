import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap'
import whetherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
const ServicesList = () => {
    const servicesData=[
        {
            imgUrl: whetherImg,
            title:"Calculate Weather",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            imgUrl: guideImg,
            title:"Best Tour Guide",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            imgUrl: customizationImg,
            title:"Customization",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]
    return (
       <>
       {
        servicesData.map((item,index)=> <Col lg='3' key={index}> <ServiceCard item={item}/></Col>)
       }

       </>
    );
};

export default ServicesList;