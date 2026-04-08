import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";
import DropDownMenuAuth from "./DropdownMenuAuth";
import { types } from "../service/types";

export default function Sidebar({ onNavigate }) {
  const navigate = useNavigate();

  function handleSelect(className) {
    loadInfData(className).then((data) => {
      if (!data) return;

      let route = "/information";
      if (className.endsWith("Controller")) route = "/informationController";
      else if (className.endsWith("Service")) route = "/informationService";

      navigate(route, { state: { className: data } });
      onNavigate?.(); // fecha sidebar no mobile após navegar
    });
  }

  function handleSelectAuth(className) {
    loadInfData(className).then((data) => {
      if (!data) return;

      let route = "/information";
      if (className.endsWith("Controller")) route = "/informationController";
      else if (className.endsWith("Service")) route = "/informationService";
      else if (className.endsWith("Filter")) route = "/informationService";

      navigate(route, { state: { className: data } });
      onNavigate?.();
    });
  }

  async function loadInfData(className) {
    try {
      const type = types.find(t => t.match(className));
      const docs = type.docs;
      const path = type.path(className);
      const loader = docs[path];
      if (!loader) throw new Error("Arquivo não encontrado");
      const data = await loader();
      return data.default;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{
      background: "#0f1117",
      padding: "16px 10px",
      minHeight: "100%",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    }}>

      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "0 8px 16px",
        borderBottom: "1px solid #1e2130",
        marginBottom: "16px",
      }}>
        <span style={{ fontSize: "16px" }}>🏛️</span>
        <span style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>Prisão Federal</span>
        <span style={{
          marginLeft: "auto",
          fontSize: "10px",
          color: "#3b82f6",
          background: "#1e3a5f",
          padding: "2px 6px",
          borderRadius: "4px",
        }}>docs</span>
      </div>

      {/* Funcionalidades */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{
          color: "#475569",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0 8px",
          marginBottom: "6px",
        }}>
          Funcionalidades
        </p>
        <DropDownMenu type="Person"  onSelect={handleSelect} />
        <DropDownMenu type="Address" onSelect={handleSelect} />
        <DropDownMenu type="Inmate"  onSelect={handleSelect} />
        <DropDownMenu type="User"    onSelect={handleSelect} />
      </div>

      <div style={{ borderTop: "1px solid #1e2130", margin: "8px 0 16px" }} />

      {/* Autenticação */}
      <div>
        <p style={{
          color: "#475569",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0 8px",
          marginBottom: "6px",
        }}>
          Autenticação
        </p>
        <DropDownMenuAuth type="Auth" onSelect={handleSelectAuth} />
      </div>

      {/* Legenda */}
      <div style={{ borderTop: "1px solid #1e2130", marginTop: "32px", paddingTop: "16px" }}>
        {[
          { color: "#3b82f6", label: "Entity" },
          { color: "#10b981", label: "Controller" },
          { color: "#f59e0b", label: "Service" },
          { color: "#8b5cf6", label: "Filter" },
        ].map(({ color, label }) => (
          <div key={label} style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "3px 8px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ color: "#475569", fontSize: "11px" }}>{label}</span>
          </div>
        ))}
      </div>

    </div>
  );
}