import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  function handleClick() {
    setHamburger(!hamburger);
  }

  return (
    <div className="Navbar">
      <a href="/">
        {String(`<ata/> `)}
        <span>design</span>
      </a>
      <nav>
        <a href="works">Works</a>
        <a href="about">About</a>
        <a href="career">Career</a>
        <a href="contact">Contact</a>
      </nav>
      <i class="fas fa-bars" onClick={() => handleClick()}></i>
    </div>
  );
};

export default Navbar;
