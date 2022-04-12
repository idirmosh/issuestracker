import Logo from "../atoms/Logo";
import MobileMenuButton from "../molecules/MobileMenuButton";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import NavbarLogedInAction from "./NavbarLogedInAction";
import NavbarNotLogedIn from "./NavbarNotLogedIn";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Navbar() {
  const { contextUser: user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileMenuButton />
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <Logo />
            <Menu />
          </div>

          {user ? <NavbarLogedInAction /> : <NavbarNotLogedIn />}
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}
export default Navbar;
