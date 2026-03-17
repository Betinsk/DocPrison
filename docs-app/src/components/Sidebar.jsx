import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";

import { types } from "../service/types";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleSelect(className) {
    loadInfData(className).then((data) => {
      if (!data) return;
      console.log(data)

    let route = "/information";

    if (className.endsWith("Controller")) {
        route = "/informationController";
    } else if (className.endsWith("Service")) {
        route = "/informationService";
    }

      navigate(route, { state: { className: data } });
    });
  }

  async function loadInfData(className) {
    try {

      const type = types.find(t => t.match(className));

      const docs = type.docs;
      const path = type.path(className);

      const loader = docs[path];

      if (!loader) {
        throw new Error("Arquivo não encontrado");
      }

      const data = await loader();
      return data.default;

    } catch (error) {
      console.error(error);
    }
  }

  /* async function loadInfData(className) {
  
    try {
  
      const isController = className.endsWith("Controller");
  
      const docs = isController ? controllerDocs : entityDocs;
  
      const path = isController
        ? `../data/controllers/${className}.json`
        : `../data/entities/${className}.json`;
  
      const loader = docs[path];
  
      if (!loader) {
        console.error("Arquivo não encontrado:", path);
        return null;
      }
  
      const module = await loader();
  
      return module.default;
  
    } catch (error) {
  
      console.error("Erro carregando documentação:", error);
      return null;
  
    }
  } */

  return (
    <>
      <DropDownMenu type="Person" onSelect={handleSelect} />
      <DropDownMenu type="Address" onSelect={handleSelect} />
      <DropDownMenu type="Inmate" onSelect={handleSelect} />

    </>
  )
}