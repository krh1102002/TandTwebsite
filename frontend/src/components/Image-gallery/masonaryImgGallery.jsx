import React from "react";
import galleryImages from "./galleryimgaes";
import  Masonry, {ResponsiveMasonry } from "react-responsive-masonry";
const MasonaryImgGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
            className="masonary__img"
              src={item}
              alt=""
              key={index}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonaryImgGallery;
