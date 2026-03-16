import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (

    <div className="container-fluid">

      <NavBar />

      <div className="row g-3">

        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2">
          <Sidebar />
        </div>

        {/* Conteúdo */}
        <div className="col-12 col-md-9 col-lg-10">
          <Outlet />
        </div>

      </div>

    </div>

  );
}