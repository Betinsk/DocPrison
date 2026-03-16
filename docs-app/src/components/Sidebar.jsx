import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";
const modules = import.meta.glob("../data/*.json");

export default function Sidebar() {
    const navigate = useNavigate();

    async function loadInfData(name) {
        console.log(Object.keys(modules));
        const path = `../data/${name}.json`;
        const loader = modules[path];
        if (!loader) {
            console.error("Arquivo não encontrado:", name);
            return null;
        }
        const data = await loader();
        return data.default;
    }

    function handleSelect(className) {
        loadInfData(className).then((data) => {
            if (!data) return;
            navigate("/information", { state: { className: data } });
        });
    }

    return (
        <>
            <DropDownMenu type="Person" onSelect={handleSelect} />
            <DropDownMenu type="Address" onSelect={handleSelect} />
        </>
    )
}