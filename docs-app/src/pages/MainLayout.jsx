import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>

      <NavBar />

      {/* Toggle da sidebar — só aparece em mobile */}
      <div className="d-md-none" style={{
        padding: "10px 16px",
        borderBottom: "1px solid #e2e8f0",
        background: "#fff",
      }}>
        <button
          onClick={() => setSidebarOpen(o => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#0f1117",
            border: "none",
            borderRadius: "6px",
            padding: "7px 14px",
            cursor: "pointer",
            color: "#94a3b8",
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span>{sidebarOpen ? "✕" : "☰"}</span>
          <span>{sidebarOpen ? "Fechar menu" : "Ver classes"}</span>
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Sidebar — sempre visível em md+, controlada por state em mobile */}
        <div className={`d-none d-md-block`} style={{
          width: "220px",
          flexShrink: 0,
          position: "sticky",
          top: "52px",
          height: "calc(100vh - 52px)",
          overflowY: "auto",
        }}>
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </div>

        {/* Sidebar mobile — drawer que empurra o conteúdo */}
        {sidebarOpen && (
          <div className="d-md-none" style={{
            width: "240px",
            flexShrink: 0,
            position: "sticky",
            top: "52px",
            height: "calc(100vh - 52px)",
            overflowY: "auto",
          }}>
            <Sidebar onNavigate={() => setSidebarOpen(false)} />
          </div>
        )}

        {/* Conteúdo principal */}
        <div style={{
          flex: 1,
          padding: "24px 20px",
          minWidth: 0,
        }}>
          <Outlet />
        </div>

      </div>

    </div>
  );
}