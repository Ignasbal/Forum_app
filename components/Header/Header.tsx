import React from "react";
import style from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.headerComponent}>
      <div className={style.headerWraper}>
        <header className={style.header}>
          <div className={style.logo}>
            <h1>The Forum</h1>
          </div>
          <nav className={style.links}>
            <ul>
              <li>
                <a href="#">Liked</a>
              </li>
              <li>
                <a href="#">Ask a question</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
