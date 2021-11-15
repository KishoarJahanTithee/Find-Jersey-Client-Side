import React from 'react';
import { Carousel} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://content.sportslogos.net/news/2021/10/Green-Bay-Packers-1170x658.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
    <NavLink to="/explore" className="btn btn-warning">Explore More <i class="fas fa-fire"></i></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.vox-cdn.com/thumbor/XvlXH24i3by0FZp6T6PE5ZoUGcA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030071/Untitled_1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <NavLink to="/explore" className="btn btn-warning">Explore More <i class="fas fa-fire"></i></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bloximages.newyork1.vip.townnews.com/thedaonline.com/content/tncms/assets/v3/editorial/6/0a/60a602ec-8cb3-11eb-b570-031ff5f44a4c/605b56e9578d2.image.jpg?resize=1200%2C800"
      alt="Third slide"
    />

    <Carousel.Caption>
    <NavLink to="/explore" className="btn btn-warning">Explore More <i class="fas fa-fire"></i></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
  );
  };    

export default Banner;