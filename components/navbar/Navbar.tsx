import Container from "../global/Container";
import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import DartMode from "./DartMode";
import { Suspense } from "react";
function Navbar() {
  return (
    <div className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex gap-4 items-center">
          <CartButton />
          <DartMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
