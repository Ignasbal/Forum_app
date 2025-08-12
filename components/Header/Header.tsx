import React from "react";
import style from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>The Forum</div>
      <nav>
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
  );
};

export default Header;
