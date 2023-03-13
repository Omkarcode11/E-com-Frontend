import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner">
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="/assets/Banner1.jpg"
              className="w-100 d-block"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img src="/assets/Banner2.jpg" className="w-100 d-block" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="/assets/Banner3.jpg" className="w-100 d-block" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner