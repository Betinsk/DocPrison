import ProjetoPrisaoFederal from "./ProjetoPrisao";


export default function Home() {
  return (
<>
    <h1 className="fw-bold">Bem-vindo à Documentação da Prisão Federal</h1>
    <p className="text-muted">Explore as funcionalidades e recursos do DocPrison.</p> 
    
      <a href="https://prisaofederaljava.netlify.app/#" className="btn btn-secondary">Acessar Projeto</a>
    
      <ProjetoPrisaoFederal />

   </>
  );
}