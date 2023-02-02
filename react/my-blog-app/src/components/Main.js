import React, { useState } from "react";
import Images1 from "../images/1.jpeg";
import Images2 from "../images/2.jpeg";
import Images3 from "../images/3.jpeg";
import Images4 from "../images/4.jpg";
import Images5 from "../images/5.jpg";
import Images6 from "../images/6.jpg";
import Images7 from "../images/9.jpg";
import Images8 from "../images/8.jpg";
import Images9 from "../images/10.jpg";
import Images10 from "../images/11.jpg";
import Images11 from "../images/12.jpg";
import Images12 from "../images/13.jpg";
import Images13 from "../images/14.jpg";
import { Carousel } from "react-bootstrap";

function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        <img className="d-block" src={Images1} alt="Crispin" />
        <Carousel.Caption>
          <h1 className="text-black fs-1">Crispin</h1>
          <h3 className="text-black">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images2} alt="Basilio" />
        <Carousel.Caption>
          <h1 className="text-black">Basilio</h1>
          <h3 className="text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images3} alt="Sisa" />
        <Carousel.Caption>
          <h1 className="text-white">Sisa</h1>
          <h3>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images4} alt="Damaso" />
        <Carousel.Caption>
          <h1 className="text-black">Damaso</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images5} alt="Clara" />
        <Carousel.Caption>
          <h1 className="text-black">Clara</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images6} alt="Ibarra" />
        <Carousel.Caption>
          <h1 className="text-black">Ibarra</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images7} alt="Elias" />
        <Carousel.Caption>
          <h1 className="text-black">Elias</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images8} alt="Isabel" />
        <Carousel.Caption>
          <h1 className="text-black">Isabel</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images9} alt="maria" />
        <Carousel.Caption>
          <h1 className="text-black">Maria</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images10} alt="quatrokantos" />
        <Carousel.Caption>
          <h1 className="text-black">quatrokantos</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images11} alt="alfonso" />
        <Carousel.Caption>
          <h1 className="text-black">Alfonso</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images12} alt="malasado" />
        <Carousel.Caption>
          <h1 className="text-black">Malasado</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={Images13} alt="florante" />
        <Carousel.Caption>
          <h1 className="text-black">Florante</h1>
          <h3 className="text-black">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default Main;
