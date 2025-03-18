import logo from "../assets/potable-water-symbol.svg";

const Header = () => {
  return (
    <header className="navbar bg-cyan-700 shadow-sm">
      <a className="btn btn-ghost text-xl">
        <img src={logo} alt="Logo" className="h-8 mr-1" />
        Water Cost Calculator
      </a>
    </header>
  );
};

export default Header;
