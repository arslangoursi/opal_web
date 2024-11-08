"use client";

import { useLayoutEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
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
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}
