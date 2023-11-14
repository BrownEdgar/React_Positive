import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

export default function Layouts() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
