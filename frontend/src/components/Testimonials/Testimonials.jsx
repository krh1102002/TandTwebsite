import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
import ava05 from "../../assets/images/ava-5.jpg";
import ava06 from "../../assets/images/ava-6.jpg";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Prajwal Tupare</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Saurabh Satpute</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sagar Ahire</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Rohan Biradar</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Hardik Chaudhari</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          voluptates modi facere totam, ducimus velit officiis exercitationem at
          saepe a iure quibusdam veritatis eligendi dolorum reiciendis
          laboriosam officia, dicta ex?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava06} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Anikit Narkhede</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
