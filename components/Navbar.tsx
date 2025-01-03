import type { NextPage } from "next";
import NavItem from "./NavItem";
import { useSession } from "next-auth/react";

const Navbar: NextPage = () => {
  const session = useSession();

  return (
    <nav className="px-16 bg-black flex justify-between">
      <div className="flex">
        <NavItem text="Home" href="" />
        <NavItem text="Example1" href="example1" />
        <NavItem text="Example2" href="example2" />
        <NavItem text="Example3" href="example3" />
      </div>
      <div className="flex">
        {session.status === "authenticated" && (
          <NavItem text="Profile" href="profile" />
        )}
        <NavItem auth />
      </div>
    </nav>
  );
};

export default Navbar;
