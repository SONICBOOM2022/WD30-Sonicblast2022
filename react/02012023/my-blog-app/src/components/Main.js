import "../css/Main.css";
import React from "react";
import Image1 from "../images/a.jpg";
import Image2 from "../images/b.jpg";
import Image3 from "../images/c.jpg";
import Image4 from "../images/d.jpg";
import Image5 from "../images/e.jpg";
import Image6 from "../images/f.jpg";
import Image7 from "../images/g.jpg";
import Image8 from "../images/h.jpg";
import Image9 from "../images/i.jpg";
import Image10 from "../images/j.jpg";
import Image11 from "../images/k.jpg";
import Image12 from "../images/l.jpg";
import Image13 from '../images/1.jpeg';
import Image14 from '../images/2.jpeg';
import Image15 from '../images/3.jpg';
import Image16 from '../images/4.jpg';
import Image17 from '../images/5.jpg';
import Image18 from '../images/6.jpg';
import Image19 from '../images/8.jpg';
import Image20 from '../images/9.jpg';
import Image21 from '../images/10.jpg';
import Image22 from '../images/11.jpg';
import Image23 from '../images/12.jpg';
import Image24 from '../images/13.jpg';
import Image25 from '../images/14.jpg';

function Main() {
  return (
    <div className="main grid">
    <div className="main-uno row">
        <div className="carousel-slide col-7" id="carouselExampleAutoplaying"  data-bs-ride="carousel"  width="100">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Image13} className="d-block w-100" alt="13"/>
      </div>
      <div className="carousel-item">
        <img src={Image14} className="d-block w-100" alt="14"/>
      </div>
      <div className="carousel-item">
        <img src={Image15} className="d-block w-100" alt="15"/>
      </div>
      <div className="carousel-item">
        <img src={Image16} className="d-block w-100" alt="16"/>
      </div>
      <div className="carousel-item">
        <img src={Image17} className="d-block w-100" alt="17"/>
      </div>
      <div className="carousel-item">
        <img src={Image18} className="d-block w-100" alt="18"/>
      </div>
      <div className="carousel-item">
        <img src={Image19} className="d-block w-100" alt="19"/>
      </div>
      <div className="carousel-item">
        <img src={Image20} className="d-block w-100" alt="20"/>
      </div>
      <div className="carousel-item">
        <img src={Image21} className="d-block w-100" alt="21"/>
      </div>
      <div className="carousel-item">
        <img src={Image22} className="d-block w-100" alt="22"/>
      </div>
      <div className="carousel-item">
        <img src={Image23} className="d-block w-100" alt="23"/>
      </div>
      <div className="carousel-item">
        <img src={Image24} className="d-block w-100" alt="24"/>
      </div>
      <div className="carousel-item">
        <img src={Image25} className="d-block w-100" alt="25"/>
      </div>
    </div>        
  </div>
  <div className="header-sub col-5">

  </div>
    </div>
    <div className="main-dos row">
      <div className="main-sub1 col-6">
        <h2>Nationwide Container Home Provider</h2>
        <p>
          Durable & Low Cost Prefab Modular Building. Uses Light Steel Structure
          Building. Fully Customizable & Resilient Against Typhoons, Strong
          Winds and Earthquakes. Durable. Architecturally-Designed. Low Cost.
          High Quality.
        </p>
        <p>
          Owning a property is one of the main goals of every Filipino. But
          considering the costs and efforts to get there can prove difficult for
          families. While landed properties are more common, people are now also
          looking at cost-effective solutions for their dreams homes. One such
          options is the prefabricated container houses. You maybe shaking your
          heads in disapproval, but it has been a growing trend for years now.
        </p>
        <p>
          Are containers insulated? Sea containers are generally constructed out
          of lightweight materials that consist mostly of corrosion-resistant
          steel coated with a protective varnish, lacquer and epoxy resin base.
          That's why if you're planning on converting one into a home, you need
          to coat it with insulation to ensure that the rooms retain a
          comfortable temperature. Whether going in your backyard or on the side
          of a mountain, all Backcountry Container designs are built to maximize
          their small footprint and help connect you to the outdoors. With large
          workshops in both Texas and Wisconsin, we can deliver our container
          creations anywhere in the country.
        </p>
      </div>

      <div
        className="carousel-slide col-3"
        id="carouselExampleAutoplaying"
        data-bs-ride="carousel"
        width="100"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="1" />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="2" />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100" alt="3" />
          </div>
          <div className="carousel-item">
            <img src={Image4} className="d-block w-100" alt="4" />
          </div>
          <div className="carousel-item">
            <img src={Image5} className="d-block w-100" alt="5" />
          </div>
          <div className="carousel-item">
            <img src={Image6} className="d-block w-100" alt="6" />
          </div>
          <div className="carousel-item">
            <img src={Image7} className="d-block w-100" alt="7" />
          </div>
          <div className="carousel-item">
            <img src={Image8} className="d-block w-100" alt="8" />
          </div>
          <div className="carousel-item">
            <img src={Image9} className="d-block w-100" alt="9" />
          </div>
          <div className="carousel-item">
            <img src={Image10} className="d-block w-100" alt="10" />
          </div>
          <div className="carousel-item">
            <img src={Image11} className="d-block w-100" alt="11" />
          </div>
          <div className="carousel-item">
            <img src={Image12} className="d-block w-100" alt="12" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
