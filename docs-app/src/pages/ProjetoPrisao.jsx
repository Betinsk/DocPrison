import React from "react";

export default function ProjetoPrisaoFederal() {
  return (
    <div className="container mt-5">

      {/* Título */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Prisão Federal</h1>
        <h4 className="text-muted">Sistema de Gestão Prisional</h4>
        <p className="mt-3">
          Sistema de gestão prisional inspirado em séries como
          <strong> The Orange Is the New Black</strong> e <strong>Breaking Bad</strong>.
          Permite gerenciar detentos, funcionários, unidades prisionais,
          atividades internas e eventos com dashboard analítico e autenticação segura.
        </p>
      </div>

      {/* Tecnologias */}
      <div className="mb-5">
        <h2 className="mb-4">💻 Tecnologias</h2>

        <div className="row">

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Backend</h5>
                <ul>
                  <li>Java 17+</li>
                  <li>Spring Boot</li>
                  <li>JPA / Hibernate</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Frontend</h5>
                <ul>
                  <li>React</li>
                  <li>React Query</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Autenticação</h5>
                <ul>
                  <li>Spring Security</li>
                  <li>JWT</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Dev Tools</h5>
                <ul>
                  <li>Cloudflare Tunnel</li>
                  <li>H2 (modo PostgreSQL)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Estrutura do Projeto */}
      <div className="mb-5">
        <h2 className="mb-4">🚀 Estrutura do Projeto</h2>

        <div className="row">

          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Backend (Spring Boot)</h5>
                <pre>
{`src/main/java/com/prisaofederal/
 ├─ controller/   # Endpoints REST
 ├─ entity/       # Entidades JPA
 ├─ repository/   # Repositórios
 ├─ service/      # Lógica de negócio
 └─ config/       # Security, DB, JWT`}
                </pre>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Frontend (React)</h5>
                <pre>
{`src/
 ├─ components/
 ├─ hooks/
 ├─ pages/
 ├─ services/
 └─ utils/`}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Funcionalidades */}
      <div className="mb-5">
        <h2 className="mb-4">🔑 Funcionalidades</h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Detentos</h5>
                <p>Cadastro, movimentação e histórico de detentos.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Funcionários</h5>
                <p>Controle de funcionários e permissões.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Unidades</h5>
                <p>Gerenciamento de unidades prisionais e celas.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Atividades</h5>
                <p>Registro de trabalho, estudos e eventos internos.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>Dashboard</h5>
                <p>Estatísticas e gráficos do sistema prisional.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Referências */}
      <div className="mb-5">
        <h2>📚 Referências</h2>

        <ul>
          <li>Spring Boot Docs</li>
          <li>Hibernate / JPA Docs</li>
          <li>React Docs</li>
          <li>Cloudflare Tunnel Docs</li>
        </ul>
      </div>

    </div>
  );
}