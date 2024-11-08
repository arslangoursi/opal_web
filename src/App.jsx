import "./app.css";

import hero_arc from "./assets/hero_arc.png";
import hero_img from "./assets/hero_img.png";

export default function App() {
  return (
    <>
      <div className="homepage">
        <div className="Homepage__hero">
          <div className="Homepage__hero__header">Header</div>
          <div className="Homepage__hero__info">
            <div className="Homepage__hero__info__wraper">
              <div className="Homepage__hero__info__text">
                <div className="Homepage__hero__info__text__heading">
                  Experience Unmatched Luxury at Opal Residential Villas
                </div>
                <img
                  className="Homepage__hero__info__text__img"
                  alt="hero_arc"
                  src={hero_arc}
                />
                <div className="Homepage__hero__info__text__description">
                  Opal Residential Villas, located in Riyadh Al Malqa district,
                  offers luxurious, uniquely designed villas that redefine
                  elegance and comfort. Experience exclusive living with
                  top-tier amenities for an unparalleled lifestyle
                </div>
                <button className="Homepage__hero__info__text__btn">
                  Contact Us
                </button>
              </div>
            </div>
            <img
              className="Homepage__hero__info__img"
              src={hero_img}
              alt="hero Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
