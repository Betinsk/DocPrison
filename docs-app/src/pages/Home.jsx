
import MethodCard from "../components/MethodCard";
import NavBar from "../components/NavBar";
import DropDownMenu from "../components/DropdownMenu";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
<>
    <h2>Bem-vindo à Documentação do DocPrison</h2>
    <p>Explore as funcionalidades e recursos do DocPrison para facilitar a documentação do seu projeto.</p> 
   {/* 
   <div>  <h1>📘 Documentação</h1>

      {methods.map((m, i) => (
        <MethodCard key={i} method={m} />
      ))}
    </div>

    */} 
    
   </>
  );
}