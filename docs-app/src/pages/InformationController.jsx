import { useLocation } from "react-router-dom";

export default function InformationController() {

    const location = useLocation();
    const controller = location.state?.className;
    console.log(controller)

    if (!controller) {
        return <h3 className="text-center mt-5">Nenhuma documentação encontrada</h3>;
    }

    return (

        <div className="container mt-4">

            <h2 className="mb-4">{controller.controller}</h2>

            <p>{controller.description}</p>

            {controller.methods.map((method, index) => (

                <div className="card mb-4 shadow" key={index}>

                    <div className="card-header bg-dark text-white">

                        <span className="badge bg-success me-2">
                            {method.method}
                        </span>

                        <strong>
                            {method.endpoint}
                        </strong>

                    </div>

                    <div className="card-body">

                        <p><strong>Method Name:</strong> {method.name}</p>

                        <p><strong>Objective:</strong> {method.objective}</p>

                        <p><strong>Description:</strong> {method.description}</p>

                        {method.input?.example && (

                            <>
                                <h6>Input Example</h6>

                                <pre className="bg-dark text-light p-3 rounded">
                                    {JSON.stringify(method.input.example, null, 2)}
                                </pre>
                            </>

                        )}

                        {method.output?.example && (

                            <>
                                <h6>Output Example</h6>

                                <pre className="bg-dark text-light p-3 rounded">
                                    {JSON.stringify(method.output.example, null, 2)}
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