import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";
const entityDocs = import.meta.glob("../data/entities/*.json");
const controllerDocs = import.meta.glob("../data/controllers/*.json");

export default function Sidebar() {
    const navigate = useNavigate();

    function handleSelect(className) {
        loadInfData(className).then((data) => {
            if (!data) return;
            console.log(data)
         const route = className.endsWith("Controller")
            ? "/informationController"
            : "/information";
        navigate(route, { state: { className: data } });
        });
    }

  async function loadInfData(className) {

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
}



    return (
        <>
            <DropDownMenu type="Person" onSelect={handleSelect} />
            <DropDownMenu type="Address" onSelect={handleSelect} />
            <DropDownMenu type="inmates" onSelect={handleSelect} />

        </>
    )
}