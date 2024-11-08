"use client";

import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [language, setLanguage] = useState("ar");
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
    <div className="header__main">
      <div className={pathname === "/" ? "header" : "header__other"}>
        <a
          href="/"
          className={pathname === "/" ? "header__logo" : "header__logo__other"}
        >
          <Image src="/logoblack.png" alt="logo" width={140} height={32} />
        </a>
        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <a
            className={
              pathname === "/"
                ? "header__nav__item"
                : "header__nav__item__other"
            }
            href="/info"
          >
            Map
          </a>
          <a
            href="/contactUs"
            className={
              pathname === "/"
                ? "header__nav__item"
                : "header__nav__item__other"
            }
          >
            Project
          </a>
          <a
            href="/contactUs"
            className={
              pathname === "/"
                ? "header__nav__item"
                : "header__nav__item__other"
            }
          >
            News
          </a>
          <a
            href="/contactUs"
            className={
              pathname === "/"
                ? "header__nav__item"
                : "header__nav__item__other"
            }
          >
            Contact
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
  );
}
