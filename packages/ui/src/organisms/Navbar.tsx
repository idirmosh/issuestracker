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
    <nav className="bg-indigo-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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
