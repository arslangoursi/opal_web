"use client";

import "../app/style.scss";
import "../app/header.scss";
import "../app/footer.scss";
import "animate.css";

import { Fade, Zoom } from "react-awesome-reveal";
import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(true);

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
                    {language === "ar" ? " رسم خريطة" : "Map"}
                  </a>
                  <a
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                    href="#section2"
                  >
                    {language === "ar" ? " المشاريع" : "Projects"}
                  </a>
                  <a
                    href="#section3"
                    className={
                      pathname === "/"
                        ? "header__nav__item"
                        : "header__nav__item__other"
                    }
                  >
                    {language === "ar" ? " أخبار" : "News"}
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
                  <div className="homepage__hero__info__text__heading">
                    {language === "ar"
                      ? "استمتع بتجربة فاخرة لا مثيل لها في فلل أوبال السكنية"
                      : "Experience Unmatched Luxury at Opal Residential Villas"}
                  </div>
                  <Zoom direction="in">
                    <img
                      className="homepage__hero__info__text__img"
                      alt="hero_arc"
                      src="/hero_arc.png"
                    />
                  </Zoom>
                  <div className="homepage__hero__info__text__description">
                    {language === "ar"
                      ? "تقع فلل أوبال السكنية في حي الملقا بالرياض، وتوفر فللًا فاخرة مصممة بشكل فريد تعيد تعريف الأناقة والراحة. استمتع بتجربة حياة حصرية مع وسائل راحة من الدرجة الأولى لأسلوب حياة لا مثيل له"
                      : "Opal Residential Villas, located in Riyadh Al Malqa district, offers luxurious, uniquely designed villas that redefine elegance and comfort. Experience exclusive living with top-tier amenities for an unparalleled lifestyle"}
                  </div>
                  <a
                    className="homepage__hero__info__text__btn"
                    href="#section4"
                  >
                    {language === "ar" ? "اتصل بنا" : "Contact Us"}
                  </a>
                </div>
              </Fade>
            </div>
            <img
              className="homepage__hero__info__img"
              src="/hero_img.png"
              alt="hero Image"
            />
          </div>
          <div>
            <img src="/hero_back.png" className="homepage__hero__img" />
          </div>
        </div>
        <Fade direction="up">
          <div className="homepage__amenities" id="section1">
            <img
              src="/aminity__back.png"
              className="homepage__amenities__img"
            />
            <div className="homepage__amenities__info">
              <div className="homepage__amenities__info__left">
                <img alt="image" src="/amnity_img.png" />
              </div>
              <div
                className="homepage__amenities__info__right"
                style={{ textAlign: language === "ar" ? "right" : "left" }}
              >
                <div className="homepage__amenities__info__right__heading">
                  {language === "ar"
                    ? "وسائل راحة لا مثيل لها لكل نمط حياة"
                    : "Unrivaled Amenities for Every Lifestyle"}
                </div>
                <div className="homepage__amenities__info__right__text">
                  {language === "ar"
                    ? "من مناطق الجلوس الكبيرة وقاعات الطعام الفسيحة إلى الطابق السفلي المليء بالمساحات الترفيهية المتنوعة، تعيد فلل أوبال تعريف المعيشة الفاخرة. استمتع بميزات مثل غرفة السينما الخاصة ومناطق لعب الأطفال ومساحات اللياقة البدنية والحدائق الخارجية المذهلة. تم تصميم كل التفاصيل لخلق نمط حياة متوازن، ودمج الراحة والرفاهية."
                    : "From grand sitting areas and spacious dining halls to a basement filled with diverse recreational spaces, Opal Villas redefines luxury living. Enjoy features like a private cinema room, children play areas, fitness spaces, and stunning outdoor gardens. Every detail is designed to create a balanced lifestyle, merging comfort and opulence."}
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="up">
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
                <div className="homepage__villa__info__left__heading">
                  {language === "ar"
                    ? "ابحث عن الفيلا التي تناسب نمط حياتك"
                    : "Find the Villa That Fits Your Lifestyle"}
                </div>
                <div className="homepage__villa__info__left__subheading">
                  {language === "ar"
                    ? "اختر من بين خيارات الفلل المتنوعة ذات التصميمات الفسيحة عبر عدة طوابق، بما في ذلك الطوابق السفلية والطوابق العليا. تتميز كل فيلا بغرف نوم أنيقة ومطابخ حديثة ومساحات خارجية مريحة لتوفير ملاذ مثالي."
                    : "  Choose from various villa options with spacious layouts across multiple floors, including basements and upper levels. Each villa features elegant bedrooms, modern kitchens, and relaxing outdoor spaces for the perfect retreat."}
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/116hd--g6DBFX1XAvRQqPDoTfydtyeGUV/view?usp=drive_link"
                  className="homepage__villa__info__left__btn"
                >
                  {language === "ar" ? " تحميل" : "Download"}
                </a>
              </div>
              <div className="homepage__villa__info__right">
                <img src="/villa_img.png" alt="villa" />
              </div>
            </div>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="homepage__book" id="section3">
            <div className="homepage__book_text">
              <div className="homepage__book_text__heading">
                {language === "ar"
                  ? " احجز فيلتك اليوم"
                  : "  Book Your Villa Today"}
              </div>
              <div className="homepage__book_text__subheading">
                {language === "ar"
                  ? " لا تفوت فرصة العيش في أحد أفخم المجتمعات بالرياض. اتصل بنا للحصول على مزيد من المعلومات ولحجز الفيلا الخاصة بك في فلل أوبال السكنية. ابدأ رحلتك إلى أسلوب حياة غير عادي."
                  : "Don’t miss the chance to live in one of Riyadh most luxurious communities. Contact us for more information and to reserve your villa at Opal Residential Villas. Begin your journey to an extraordinary lifestyle."}
              </div>
            </div>
            <img
              className="homepage__book_img"
              src="/book_img.png"
              alt="booking__Image"
            />
          </div>
        </Fade>
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
                height={55}
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
            <div className="footer__content__get__heading">
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
                height={35}
                width={180}
                quality={100}
                alt="logo"
              />
            </div>
            <div className="footer__content__bottom__social">
              <div className="footer__content__bottom__social__icon">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.4355 0.575699L7.27681 0.572266C4.85159 0.572266 3.28431 2.16608 3.28431 4.63294V6.50518H1.11385C0.926293 6.50518 0.774414 6.65589 0.774414 6.8418V9.55446C0.774414 9.74036 0.926466 9.8909 1.11385 9.8909H3.28431V16.7358C3.28431 16.9217 3.43619 17.0723 3.62375 17.0723H6.45559C6.64314 17.0723 6.79502 16.9216 6.79502 16.7358V9.8909H9.3328C9.52036 9.8909 9.67224 9.74036 9.67224 9.55446L9.67328 6.8418C9.67328 6.75253 9.63743 6.66705 9.57387 6.60388C9.51031 6.54071 9.42372 6.50518 9.33367 6.50518H6.79502V4.91806C6.79502 4.15522 6.97842 3.76797 7.98096 3.76797L9.43515 3.76745C9.62253 3.76745 9.77441 3.61674 9.77441 3.43101V0.912143C9.77441 0.726584 9.62271 0.576042 9.4355 0.575699Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="footer__content__bottom__social__icon">
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4355 0.833984C14.6975 0.833984 16.5312 2.66771 16.5312 4.92973V13.2382C16.5312 15.5003 14.6975 17.334 12.4355 17.334H4.12699C1.86498 17.334 0.03125 15.5003 0.03125 13.2382V4.92973C0.03125 2.66771 1.86498 0.833984 4.12699 0.833984H12.4355ZM8.33976 3.87654C5.43145 3.87654 3.0738 6.23419 3.0738 9.1425C3.0738 12.0508 5.43145 14.4085 8.33976 14.4085C11.2481 14.4085 13.6057 12.0508 13.6057 9.1425C13.6057 6.23419 11.2481 3.87654 8.33976 3.87654ZM8.33976 6.21696C9.95549 6.21696 11.2653 7.52677 11.2653 9.1425C11.2653 10.7582 9.95549 12.068 8.33976 12.068C6.72403 12.068 5.41423 10.7582 5.41423 9.1425C5.41423 7.52677 6.72403 6.21696 8.33976 6.21696ZM13.6642 2.88186C13.2118 2.88186 12.8451 3.2486 12.8451 3.70101C12.8451 4.15341 13.2118 4.52015 13.6642 4.52015C14.1166 4.52015 14.4834 4.15341 14.4834 3.70101C14.4834 3.2486 14.1166 2.88186 13.6642 2.88186Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="footer__content__bottom__social__icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9062 10.9441V17.3087H14.209V11.3703C14.209 9.87858 13.6743 8.86051 12.336 8.86051C11.3144 8.86051 10.7064 9.54661 10.439 10.2103C10.3414 10.4476 10.3163 10.7778 10.3163 11.1099V17.3087H6.61783C6.61783 17.3087 6.66764 7.25106 6.61783 6.20901H10.3159V7.78235C10.3084 7.79412 10.2987 7.80681 10.2916 7.81822H10.3159V7.78235C10.8073 7.02712 11.6847 5.94825 13.6488 5.94825C16.0821 5.94825 17.9062 7.53468 17.9062 10.9441ZM2.74907 0.858398C1.48382 0.858398 0.65625 1.68663 0.65625 2.77579C0.65625 3.84122 1.45988 4.69459 2.69998 4.69459H2.72468C4.01443 4.69459 4.81654 3.84138 4.81654 2.77579C4.79224 1.68663 4.01443 0.858398 2.74907 0.858398ZM0.875907 17.3087H4.57298V6.20901H0.875907V17.3087Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="footer__content__bottom__social__icon">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0312 2.78667C20.2866 3.11665 19.4866 3.33961 18.6456 3.44039C19.5133 2.92115 20.1626 2.10394 20.4721 1.14124C19.6568 1.62549 18.7645 1.96636 17.834 2.14901C17.2083 1.48091 16.3795 1.03808 15.4763 0.889271C14.5731 0.740467 13.6461 0.894014 12.8391 1.32607C12.0321 1.75813 11.3903 2.44453 11.0134 3.2787C10.6365 4.11287 10.5455 5.04814 10.7546 5.93931C9.10268 5.85636 7.48662 5.42699 6.01135 4.67906C4.53607 3.93113 3.23455 2.88135 2.19124 1.59786C1.83451 2.21322 1.62938 2.92669 1.62938 3.68653C1.62899 4.37057 1.79744 5.04412 2.11979 5.64744C2.44214 6.25076 2.90842 6.76518 3.47727 7.14507C2.81756 7.12408 2.1724 6.94582 1.5955 6.62513V6.67864C1.59543 7.63802 1.92729 8.56788 2.53476 9.31044C3.14223 10.053 3.98791 10.5625 4.92828 10.7525C4.31629 10.9182 3.67466 10.9426 3.05186 10.8239C3.31718 11.6494 3.834 12.3712 4.52996 12.8884C5.22592 13.4056 6.06619 13.6922 6.93313 13.7081C5.46145 14.8634 3.64394 15.49 1.77297 15.4873C1.44155 15.4874 1.11041 15.468 0.78125 15.4293C2.68039 16.6504 4.89113 17.2984 7.14895 17.2959C14.792 17.2959 18.9702 10.9657 18.9702 5.47555C18.9702 5.29719 18.9658 5.11704 18.9577 4.93867C19.7705 4.35093 20.472 3.62312 21.0295 2.78935L21.0312 2.78667Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
