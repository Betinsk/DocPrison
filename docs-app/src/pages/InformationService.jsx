import { useLocation } from "react-router-dom";

export default function InformationService() {

    const location = useLocation();
    const service = location.state?.className; // aqui vem o objeto do Service
    console.log(service)

    if (!service) {
        return <h3 className="text-center mt-5">Nenhuma documentação encontrada</h3>;
    }

    return (
        <div className="container mt-4">

              <h1 className="mb-4">Documentação da API</h1>
             <p>This is the information page.</p>
    

            <h2 className="mb-4">{service.service}</h2>

            <p>{service.description}</p>

           {Array.isArray(service) && service.map((method, index) =>   (
                <div className="card mb-4 shadow" key={index}>

                    <div className="card-header bg-dark text-white">
                        <span className="badge bg-success me-2">
                            {method.name}
                        </span>
                    </div>

                    <div className="card-body">

                        <p><strong>Method Name:</strong> {method.name}</p>

                        <p><strong>Objective:</strong> {method.objective}</p>

                        <p><strong>Description:</strong> {method.description}</p>

                        {method.input && method.input.length > 0 && (
                            <>
                                <h6>Input Example</h6>
                                <pre className="bg-dark text-light p-3 rounded">
                                    {JSON.stringify(method.input, null, 2)}
                                </pre>
                            </>
                        )}

                        {method.input && method.input.length > 0 && (
                            <>
                                <h6>Output Example</h6>
                                <pre className="bg-dark text-light p-3 rounded">
                                    {JSON.stringify(method.output, null, 2)}
                                </pre>
                            </>
                        )}

                        {method.rules && (
                            <>
                                <h6>Rules</h6>
                                <ul>
                                    {method.rules.map((rule, i) => (
                                        <li key={i}>{rule}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                    </div>
                </div>
            ))}

        </div>
    );
}