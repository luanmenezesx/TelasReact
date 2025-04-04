import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Outlet } from "react-router";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar className="shadow-md">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Administração Musical</p>
        </NavbarBrand>

        {/* Abas principais */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="comentarios">
              Comentários
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="posts">
              Posts
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet/>
    </div>
  );
}
