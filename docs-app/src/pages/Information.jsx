import { useLocation } from "react-router-dom";

export default function Information() {

  const location = useLocation();
  const data = location.state?.className || [];

  return (

    <div className="container mt-4">

        <h1 className="mb-4">Documentação da API</h1>
      <p>This is the information page.</p>
    
        
  
      {data.map((item, index) => (

        <div className="card mb-4 shadow" key={index}>

          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">
              <span className="badge bg-success me-2">POST</span>
              {item.name}
            </h5>
          </div>

          <div className="card-body">

            {item.objective && (
              <p><strong>Objetivo:</strong> {item.objective}</p>
            )}

            {item.description && (
              <p><strong>Descrição:</strong> {item.description}</p>
            )}

            {/* INPUT TABLE GENÉRICA */}
            {item.input && item.input.length > 0 && (
              <>
                <h6>Input</h6>

                <table className="table table-bordered">

                  <thead>
                    <tr>
                      {Object.keys(item.input[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {item.input.map((row, i) => (
                      <tr key={i}>
                        {Object.values(row).map((value, j) => (
                          <td key={j}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>

                </table>
              </>
            )}

            {/* REGRAS */}
            {item.rules && (
              <>
                <h6>Regras</h6>
                <ul>
                  {item.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </>
            )}

            {/* JSON */}
            {item.input && (
              <>
                <h6>Exemplo JSON</h6>
                <pre className="bg-dark text-light p-3 rounded">
                  {JSON.stringify(item.input, null, 2)}
                </pre>
              </>
            )}

          </div>

        </div>

      ))}

    </div>
  );
}