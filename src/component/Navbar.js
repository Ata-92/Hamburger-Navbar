

const Navbar = () => {
  return (
    <div className="Navbar">
      <button type="button">
        {String(`<ata/> `)}
        <span>design</span>
      </button>
      <nav>
        <a href="works">Works</a>
        <a href="about">About</a>
        <a href="career">Career</a>
        <a href="contact">Contact</a>
      </nav>
      {/* <i class="fas fa-bars"></i> */}
    </div>
  );
};

export default Navbar;
