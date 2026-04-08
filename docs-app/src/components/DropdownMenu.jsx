import { useState } from "react";

const TYPE_ICONS = {
  Person:  "👤",
  Address: "📍",
  Inmate:  "🔒",
  User:    "🛡️",
};

const OPTION_COLORS = {
  Class:      { bg: "#3b82f6", label: "entity" },
  Controller: { bg: "#10b981", label: "controller" },
  Service:    { bg: "#f59e0b", label: "service" },
};

export default function DropDownMenu({ type, onSelect }) {
  const [open, setOpen] = useState(false);
  const options = ["Class", "Controller", "Service"];
  const icon = TYPE_ICONS[type] || "📦";

  return (
    <div style={{ marginBottom: "4px" }}>

      {/* Toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: open ? "#2a2d3e" : "transparent",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          color: open ? "#e2e8f0" : "#94a3b8",
          fontSize: "13px",
          fontWeight: 500,
          transition: "all 0.15s",
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = "#1e2130"; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = "transparent"; }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "14px" }}>{icon}</span>
          <span>{type}</span>
        </span>
        <span style={{
          fontSize: "10px",
          color: "#64748b",
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.15s",
        }}>▶</span>
      </button>

      {/* Options */}
      {open && (
        <div style={{ paddingLeft: "12px", marginTop: "2px" }}>
          {options.map((opt) => {
            const meta = OPTION_COLORS[opt];
            return (
              <button
                key={opt}
                onClick={() => { onSelect(`${type}${opt}`); setOpen(false); }}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 10px",
                  background: "transparent",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  color: "#94a3b8",
                  fontSize: "12px",
                  textAlign: "left",
                  transition: "all 0.1s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#1e2130";
                  e.currentTarget.style.color = "#e2e8f0";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                <span style={{
                  width: "6px", height: "6px",
                  borderRadius: "50%",
                  background: meta.bg,
                  flexShrink: 0,
                }} />
                <span style={{ color: "#64748b", fontSize: "11px" }}>{type}</span>
                <span style={{ color: "#cbd5e1" }}>{opt === "Class" ? "Entity" : opt}</span>
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
}