import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav style={{
      background: "#0f1117",
      borderBottom: "1px solid #1e2130",
      padding: "0 24px",
      height: "52px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>

      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <span style={{ fontSize: "18px" }}>🏛️</span>
        <span style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>
          Prisão Federal
        </span>
        <span style={{
          fontSize: "10px",
          color: "#3b82f6",
          background: "#1e3a5f",
          padding: "2px 6px",
          borderRadius: "4px",
          marginLeft: "2px",
        }}>
          docs
        </span>
      </div>

      {/* Links — desktop */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }} className="d-none d-md-flex">

        <NavLink href="/" label="Home" />
        <NavLink href="https://prisaofederaljava.netlify.app/#" label="Projeto" external />

        {/* Dropdown entidades */}
        <DropdownNav label="Entidades" items={[
          { label: "Person",  href: "#" },
          { label: "Inmate",  href: "#" },
          { label: "Address", href: "#" },
        ]} />
      </div>

      {/* Hambúrguer — mobile */}
      <button
        className="d-md-none"
        onClick={() => setMenuOpen(o => !o)}
        style={{
          background: "transparent",
          border: "1px solid #1e2130",
          borderRadius: "6px",
          padding: "6px 10px",
          cursor: "pointer",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "52px",
          left: 0,
          right: 0,
          background: "#0f1117",
          borderBottom: "1px solid #1e2130",
          padding: "12px 24px",
          zIndex: 999,
        }} className="d-md-none">
          <MobileNavLink href="/" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="https://prisaofederaljava.netlify.app/#" label="Projeto" external onClick={() => setMenuOpen(false)} />
          <div style={{ color: "#475569", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", margin: "10px 0 6px" }}>
            Entidades
          </div>
          <MobileNavLink href="#" label="Person"  onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#" label="Inmate"  onClick={() => setMenuOpen(false)} />
          <MobileNavLink href="#" label="Address" onClick={() => setMenuOpen(false)} />
        </div>
      )}

    </nav>
  );
}

function NavLink({ href, label, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        color: "#94a3b8",
        fontSize: "12px",
        padding: "6px 12px",
        borderRadius: "6px",
        textDecoration: "none",
        transition: "all 0.15s",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#1e2130"; e.currentTarget.style.color = "#e2e8f0"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
    >
      {label}
      {external && <span style={{ marginLeft: "4px", fontSize: "10px", opacity: 0.5 }}>↗</span>}
    </a>
  );
}

function MobileNavLink({ href, label, external, onClick }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      style={{
        display: "block",
        color: "#94a3b8",
        fontSize: "13px",
        padding: "8px 0",
        textDecoration: "none",
        borderBottom: "1px solid #1e2130",
      }}
    >
      {label}
      {external && <span style={{ marginLeft: "4px", fontSize: "10px", opacity: 0.5 }}>↗</span>}
    </a>
  );
}

function DropdownNav({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: "transparent",
          border: "none",
          color: "#94a3b8",
          fontSize: "12px",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          transition: "all 0.15s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#1e2130"; e.currentTarget.style.color = "#e2e8f0"; }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; } }}
      >
        {label}
        <span style={{ fontSize: "9px", opacity: 0.6 }}>▼</span>
      </button>

      {open && (
        <>
          {/* Overlay para fechar */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 998 }}
            onClick={() => setOpen(false)}
          />
          <div style={{
            position: "absolute",
            top: "36px",
            left: 0,
            background: "#0f1117",
            border: "1px solid #1e2130",
            borderRadius: "8px",
            padding: "6px",
            minWidth: "140px",
            zIndex: 999,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}>
            {items.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: "#94a3b8",
                  fontSize: "12px",
                  padding: "7px 12px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  transition: "all 0.1s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1e2130"; e.currentTarget.style.color = "#e2e8f0"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#94a3b8"; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}