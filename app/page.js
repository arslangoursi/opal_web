"use client";

import "../app/style.scss";
import "../app/header.scss";
import "../app/footer.scss";
import Aos from "aos";
import { useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  function checkNavOpenClose() {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
  }, []);
  const pathname = usePathname();
  return (
    <>
      <div className="homepage">
        <div className="homepage__hero" id="hero">
          <div className="homepage__hero__header">
            <div className="header__main">
              <div className={pathname === "/" ? "header" : "header__other"}>
                <a
                  href="#hero"
                  className={
                    pathname === "/" ? "header__logo" : "header__logo__other"
                  }
                >
                  <Image
                    src="/logoblack.png"
                    alt="logo"
                    width={140}
                    height={32}
                  />
                </a>
                <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
                  <a
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                    href="#section1"
                  >
                    {language === "ar" ? "وسائل الراحة" : "Amenities"}
                  </a>
                  <a
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                    href="#section2"
                  >
                    {language === "ar" ? "عن" : "About"}
                  </a>
                  <a
                    href="#section3"
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                  >
                    {language === "ar" ? "الحجز" : "Booking"}
                  </a>
                  <a
                    href="#section4"
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                  >
                    {language === "ar" ? " اتصال" : "Contact"}
                  </a>
                </nav>
                <div className="header__actions">
                  <button
                    type="button"
                    onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                    className={`${
                      pathname === "/"
                        ? "header__language"
                        : "header__language header__language__other"
                    } ${language === "ar" ? "active" : ""}`}
                  >
                    <div className={`header__language__entry`}>EN</div>
                    <div className={`header__language__entry`}>ع</div>
                  </button>

                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="header__actions__menu"
                  >
                    {menuOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M4 12h16M4 6h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__hero__info">
            {" "}
            <div className="homepage__hero__info__wraper">
              <Fade direction="up">
                <div
                  className="homepage__hero__info__text"
                  style={{ textAlign: language === "ar" ? "right" : "left" }}
                >
                  <div
                    className="homepage__hero__info__text__heading "data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "shaheenproArabic-Light-cypwbi"
                          : "BeausiteFit-Light",
                    }}
                  >
                    {language === "ar"
                      ? "استمتع بتجربة فاخرة لا مثيل لها في فلل أوبال السكنية"
                      : "Experience Unmatched Luxury at Opal Residential Villas"}
                  </div>
                  <Zoom direction="in" >
                    <img
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                      className="homepage__hero__info__text__img"
                      alt="hero_arc"
                      src="/hero_arc.png"
                    />
                  </Zoom>
                  <div
                    className="homepage__hero__info__text__description"
                    data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1400"
                    style={{
                      fontFamily:
                        language === "ar"
                          ? "shaheenproArabic-Light-cypwbi"
                          : "BeausiteFit-Light",
                    }}
                  >
                    {language === "ar"
                      ? "تقع فلل أوبال السكنية في حي الملقا بالرياض، وتوفر فللًا فاخرة مصممة بشكل فريد تعيد تعريف الأناقة والراحة. استمتع بتجربة حياة حصرية مع وسائل راحة من الدرجة الأولى لأسلوب حياة لا مثيل له"
                      : "Opal Residential Villas, located in Riyadh Al Malqa district, offers luxurious, uniquely designed villas that redefine elegance and comfort. Experience exclusive living with top-tier amenities for an unparalleled lifestyle"}
                  </div>
                  <a
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1500"
                    className="homepage__hero__info__text__btn"
                    href="#section4"
                  >
                    {language === "ar" ? "اتصل بنا" : "Contact Us"}
                  </a>
                </div>
              </Fade>
            </div>
            <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1600"
              className="homepage__hero__info__img"
              src="/hero_img.png"
              alt="hero Image"
            />
          </div>
          <div>
            <img src="/hero_back.png" className="homepage__hero__img" />
          </div>
        </div>

        <div className="homepage__amenities" id="section1">
          <img src="/aminity__back.png" className="homepage__amenities__img" />

          <div className="homepage__amenities__info">
            <div className="homepage__amenities__info__left"data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000">
              <img alt="image" src="/amnity_img.png" />
            </div>

            <div
              className="homepage__amenities__info__right"
              style={{ textAlign: language === "ar" ? "right" : "left" }}
            >
              <Fade direction="up">
                <div data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
                  className="homepage__amenities__info__right__heading"
                  style={{
                    justifyContent:
                      language === "ar" ? "flex-end" : "flex-start",
                    fontFamily:
                      language === "ar"
                        ? "shaheenproArabic-Light-cypwbi"
                        : "BeausiteFit-Light",
                  }}
                >
                  {language === "ar"
                    ? "وسائل راحة لا مثيل لها لكل نمط حياة"
                    : "Unrivaled Amenities for Every Lifestyle"}
                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
                  className="homepage__amenities__info__right__text"
                  style={{
                    fontFamily:
                      language === "ar"
                        ? "shaheenproArabic-Light-cypwbi"
                        : "BeausiteFit-Light",
                  }}
                >
                  {language === "ar"
                    ? "من مناطق الجلوس الكبيرة وقاعات الطعام الفسيحة إلى الطابق السفلي المليء بالمساحات الترفيهية المتنوعة، تعيد فلل أوبال تعريف المعيشة الفاخرة. استمتع بميزات مثل غرفة السينما الخاصة ومناطق لعب الأطفال ومساحات اللياقة البدنية والحدائق الخارجية المذهلة. تم تصميم كل التفاصيل لخلق نمط حياة متوازن، ودمج الراحة والرفاهية."
                    : "From grand sitting areas and spacious dining halls to a basement filled with diverse recreational spaces, Opal Villas redefines luxury living. Enjoy features like a private cinema room, children play areas, fitness spaces, and stunning outdoor gardens. Every detail is designed to create a balanced lifestyle, merging comfort and opulence."}
                </div>{" "}
              </Fade>
            </div>
          </div>
        </div>

        <div className="homepage__villa" id="section2">
          <div
            className="homepage__villa__info"
            style={{ textAlign: language === "ar" ? "right" : "left" }}
          >
            <div
              className="homepage__villa__info__left"
              style={{
                alignItems: language === "ar" ? "flex-end" : "flex-start",
              }}
            >
              <Fade direction="up">
                <div 
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                  className="homepage__villa__info__left__heading"
                  style={{
                    fontFamily:
                      language === "ar"
                        ? "shaheenproArabic-Light-cypwbi"
                        : "BeausiteFit-Light",
                  }}
                >
                  {language === "ar"
                    ? "ابحث عن الفيلا التي تناسب نمط حياتك"
                    : "Find the Villa That Fits Your Lifestyle"}
                </div>
                <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
                  className="homepage__villa__info__left__subheading"
                  style={{
                    fontFamily:
                      language === "ar"
                        ? "shaheenproArabic-Light-cypwbi"
                        : "BeausiteFit-Light",
                  }}
                >
                  {language === "ar"
                    ? "اختر من بين خيارات الفلل المتنوعة ذات التصميمات الفسيحة عبر عدة طوابق، بما في ذلك الطوابق السفلية والطوابق العليا. تتميز كل فيلا بغرف نوم أنيقة ومطابخ حديثة ومساحات خارجية مريحة لتوفير ملاذ مثالي."
                    : "  Choose from various villa options with spacious layouts across multiple floors, including basements and upper levels. Each villa features elegant bedrooms, modern kitchens, and relaxing outdoor spaces for the perfect retreat."}
                </div>

                <a
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1400"
                  target="_blank"
                  href="https://drive.google.com/file/d/116hd--g6DBFX1XAvRQqPDoTfydtyeGUV/view?usp=drive_link"
                  className="homepage__villa__info__left__btn"
                >
                  {language === "ar" ? " تحميل" : "Download"}
                </a>
              </Fade>
            </div>
            <div className="homepage__villa__info__right"data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000">
              <img src="/villa_img.png" alt="villa" />
            </div>
          </div>
        </div>

        <div className="homepage__book" id="section3">
          <div className="homepage__book_text">
            <Fade direction="up">
              <div 
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
                className="homepage__book_text__heading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "shaheenproArabic-Light-cypwbi"
                      : "BeausiteFit-Light",
                }}
              >
                {language === "ar"
                  ? " احجز فيلتك اليوم"
                  : "  Book Your Villa Today"}
              </div>
              <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1200"
                className="homepage__book_text__subheading"
                style={{
                  fontFamily:
                    language === "ar"
                      ? "shaheenproArabic-Light-cypwbi"
                      : "BeausiteFit-Light",
                }}
              >
                {language === "ar"
                  ? " لا تفوت فرصة العيش في أحد أفخم المجتمعات بالرياض. اتصل بنا للحصول على مزيد من المعلومات ولحجز الفيلا الخاصة بك في فلل أوبال السكنية. ابدأ رحلتك إلى أسلوب حياة غير عادي."
                  : "Don’t miss the chance to live in one of Riyadh most luxurious communities. Contact us for more information and to reserve your villa at Opal Residential Villas. Begin your journey to an extraordinary lifestyle."}
              </div>
            </Fade>
          </div>
          <img
            className="homepage__book_img"

            data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
            src="/book_img.png"
            alt="booking__Image"
          />
        </div>
      </div>
      <div className="footer" id="section4">
        <div className="footer__content">
          <div
            className="footer__content__header"
            style={{ textAlign: language === "ar" ? "right" : "left" }}
          >
            <div className="footer__content__header__address">
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="footer__content__header__address__heading"
              >
                {language === "ar" ? " رقم التليفون" : "Phone Number"}
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="footer__content__header__address__info"
              >
                920000077
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="footer__content__header__logo"
            >
              <Image
                src="/footerlogo.png"
                height={35}
                width={150}
                quality={100}
                alt="logo"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="footer__content__header__contact"
            >
              <div className="footer__content__header__contact__heading">
                {language === "ar" ? "بريد إلكتروني" : "Email"}
              </div>
              <div className="footer__content__header__contact__info">
                contact@zood.sa
              </div>
            </div>
          </div>

          <div className="footer__content__get">
            <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
              className="footer__content__get__heading"
              style={{
                fontFamily:
                  language === "ar"
                    ? "shaheenproArabic-Light-cypwbi"
                    : "BeausiteFit-Light",
              }}
            >
              {language === "ar" ? "عش برفاهية" : "LIVE IN LUXURY"}
            </div>
          </div>
          <div className="footer__content__hr">
            <div className="footer__content__hr__line" />
          </div>
          <div className="footer__content__bottom">
            <div className="footer__content__bottom__logo">
              <Image
                src="/footerbottomlogo.png"
                height={45}
                width={180}
                quality={100}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
