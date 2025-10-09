import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Arash</div>
      <nav className="navLinks">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <button className="menuBtn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {menuOpen && (
        <nav className="mobileMenu">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
