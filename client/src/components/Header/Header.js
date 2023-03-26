import React from "react";
import "./Header.css";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        {/*
        <div className="brand">
          <h3>Posts</h3>
          <BsFillPencilFill className="icon" />
        </div>
        */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
