import "./app.css";

import aminity__back from "./assets/aminity__back.png";
import amnity_img from "./assets/amnity_img.png";
import book_img from "./assets/book_img.png";
import hero_arc from "./assets/hero_arc.png";
import hero_back from "./assets/hero_back.png";
import hero_img from "./assets/hero_img.png";
import villa_img from "./assets/villa_img.png";

export default function App() {
  return (
    <>
      <div className="homepage">
        <div className="homepage__hero">
          <div className="homepage__hero__header">Header</div>
          <div className="homepage__hero__info">
            <div className="homepage__hero__info__wraper">
              <div className="homepage__hero__info__text">
                <div className="homepage__hero__info__text__heading">
                  Experience Unmatched Luxury at Opal Residential Villas
                </div>
                <img
                  className="homepage__hero__info__text__img"
                  alt="hero_arc"
                  src={hero_arc}
                />
                <div className="homepage__hero__info__text__description">
                  Opal Residential Villas, located in Riyadh Al Malqa district,
                  offers luxurious, uniquely designed villas that redefine
                  elegance and comfort. Experience exclusive living with
                  top-tier amenities for an unparalleled lifestyle
                </div>
                <button className="homepage__hero__info__text__btn">
                  Contact Us
                </button>
              </div>
            </div>
            <img
              className="homepage__hero__info__img"
              src={hero_img}
              alt="hero Image"
            />
          </div>
          <img src={hero_back} className="homepage__hero__img" />
        </div>
        <div className="homepage__amenities">
          <img src={aminity__back} className="homepage__amenities__img" />
          <div className="homepage__amenities__info">
            <div className="homepage__amenities__info__left">
              <img src={amnity_img} />
            </div>
            <div className="homepage__amenities__info__right">
              <div className="homepage__amenities__info__right__heading">
                Unrivaled Amenities for Every Lifestyle
              </div>
              <div className="homepage__amenities__info__right__text">
                From grand sitting areas and spacious dining halls to a basement
                filled with diverse recreational spaces, Opal Villas redefines
                luxury living. Enjoy features like a private cinema room,
                children play areas, fitness spaces, and stunning outdoor
                gardens. Every detail is designed to create a balanced
                lifestyle, merging comfort and opulence.
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__villa">
          <div className="homepage__villa__info">
            <div className="homepage__villa__info__left">
              <div className="homepage__villa__info__left__heading">
                Find the Villa That Fits Your Lifestyle
              </div>
              <div className="homepage__villa__info__left__subheading">
                Choose from various villa options with spacious layouts across
                multiple floors, including basements and upper levels. Each
                villa features elegant bedrooms, modern kitchens, and relaxing
                outdoor spaces for the perfect retreat.
              </div>
              <button className="homepage__villa__info__left__btn">
                Contact Us
              </button>
            </div>
            <div className="homepage__villa__info__right">
              <img src={villa_img} alt="villa" />
            </div>
          </div>
        </div>
        <div className="homepage__book">
          <div className="homepage__book_text">
            <div className="homepage__book_text__heading">
              Book Your Villa Today
            </div>
            <div className="homepage__book_text__subheading">
              Don’t miss the chance to live in one of Riyadh most luxurious
              communities. Contact us for more information and to reserve your
              villa at Opal Residential Villas. Begin your journey to an
              extraordinary lifestyle.
            </div>
          </div>
          <img
            className="homepage__book_img"
            src={book_img}
            alt="booking__Image"
          />
        </div>
      </div>
    </>
  );
}
