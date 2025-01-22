const Header = () => {

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="relative z-20"
    >
      <nav>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap", // Enables responsiveness
            listStyle: "none",
            margin: 0,
            padding: 0,
            justifyContent: "center", // Centers content on smaller screens
          }}
        >
          <li style={{ margin: "0.5rem 0.5rem" }}>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              HOME
            </a>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <a href="/about" style={{ textDecoration: "none", color: "black" }}>
              ABOUT
            </a>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <a href="/products" style={{ textDecoration: "none", color: "black" }}>
              PRODUCTS
            </a>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <a href="/shop" style={{ textDecoration: "none", color: "black" }}>
              SHOP
            </a>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <a href="/services" style={{ textDecoration: "none", color: "black" }}>
              OUR SERVICES
            </a>
          </li>
          <li style={{ margin: "0.5rem 1rem" }}>
            <a href="/updates" style={{ textDecoration: "none", color: "black" }}>
              UPDATES
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

