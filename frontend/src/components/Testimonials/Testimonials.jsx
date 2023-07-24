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
        I recently used TandT to book a trip to India. I was very impressed with the website's ease of use and the helpfulness of the customer service team.I would definitely recommend TandT to anyone looking to book a trip.
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
        I recently used TandT to book a trip to Indonesia for my family of four. TandT had a wide variety of itineraries to choose from, and we were able to find one that perfectly suited our needs
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
        The website was very easy to use, and the customer service team was extremely helpful. We were also able to make changes to our itinerary at the last minute, and the staff was able to make the necessary arrangements without any problems
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
        We had a wonderful time on our trip. The accommodations were excellent, the food was delicious, and we saw some amazing sights. We would definitely recommend TandT to anyone looking to book a trip to Thailand.
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
        I had a great experience booking my trip through [website name]. The website was easy to use, and the customer service team was very helpful.
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
        I had a wonderful time on my trip to Thailand. TandT made the planning process easy and stress-free
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
