import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
export default function MainLayout() {
  return (

  <div className="container-fluid text-center">
    <NavBar />
  <div className="row align-items-start g-3">
    <div className="col-2">
       Coluna do indice da documentação
      <Sidebar />
    </div>
    <div className="col-10">

        <Outlet /> {/* Páginas filhas aparecem aqui */}
    </div>
    </div>
    </div>
  );
}