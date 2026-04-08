import { useLocation } from "react-router-dom";

const HTTP_METHOD_COLORS = {
    GET:    "bg-primary",
    POST:   "bg-success",
    PUT:    "bg-warning text-dark",
    DELETE: "bg-danger",
    PATCH:  "bg-info text-dark",
};

export default function InformationController() {

    const location = useLocation();
    const controller = location.state?.className;

    if (!controller) {
        return <h3 className="text-center mt-5">Nenhuma documentação encontrada</h3>;
    }

    return (
        <div className="container mt-4">

            {/* Cabeçalho */}
            <div className="mb-4">
                <h2 className="fs-3">{controller.controller}</h2>
                <p className="text-muted">{controller.description}</p>
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {controller.baseEndpoint && (
                        <span className="badge bg-dark">
                            base: <code className="text-warning">{controller.baseEndpoint}</code>
                        </span>
                    )}
                    {controller.annotations && controller.annotations.map((ann, i) => (
                        <span key={i} className="badge bg-secondary">{ann}</span>
                    ))}
                </div>
            </div>

            {controller.methods.map((method, index) => (
                <div className="card mb-4 shadow-sm" key={index}>

                    {/* Header — stack em mobile, linha em desktop */}
                    <div className="card-header bg-dark text-white">
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className={`badge ${HTTP_METHOD_COLORS[method.httpMethod] || "bg-secondary"}`}>
                                {method.httpMethod}
                            </span>
                            <code className="text-warning" style={{ wordBreak: "break-all" }}>{method.endpoint}</code>
                            <div className="d-flex gap-1 ms-auto flex-wrap">
                                <span className="badge bg-secondary">{method.name}</span>
                                {method.output?.statusCode && (
                                    <span className="badge bg-success">{method.output.statusCode}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="card-body">

                        <p><strong>Objective:</strong> {method.objective}</p>
                        <p>{method.description}</p>

                        {/* Annotations */}
                        {method.annotations && method.annotations.length > 0 && (
                            <div className="d-flex flex-wrap gap-1 mb-3">
                                {method.annotations.map((ann, i) => (
                                    <span key={i} className="badge bg-secondary">{ann}</span>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        {method.input?.fields && method.input.fields.length > 0 && (
                            <div className="mb-3">
                                <h6>Input — <code>{method.input.type}</code></h6>

                                {/* Tabela — md+ */}
                                <div className="table-responsive d-none d-md-block">
                                    <table className="table table-sm table-bordered">
                                        <thead className="table-dark">
                                            <tr>
                                                <th>Field</th>
                                                <th>Type</th>
                                                <th>Required</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {method.input.fields.map((field, i) => (
                                                <tr key={i}>
                                                    <td><code>{field.name}</code></td>
                                                    <td><code>{field.type}</code></td>
                                                    <td>{field.required ? "✅" : "—"}</td>
                                                    <td className="small">
                                                        {field.constraint && <span className="badge bg-warning text-dark me-1">{field.constraint}</span>}
                                                        {field.format && <span className="me-1 text-muted">format: {field.format}</span>}
                                                        {field.source && <span className="badge bg-info text-dark">{field.source}</span>}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Cards — mobile */}
                                <div className="d-md-none">
                                    {method.input.fields.map((field, i) => (
                                        <div className="card mb-2 shadow-sm" key={i}>
                                            <div className="card-body py-2">
                                                <div className="d-flex justify-content-between flex-wrap gap-1 mb-1">
                                                    <code>{field.name}</code>
                                                    <code className="text-muted">{field.type}</code>
                                                </div>
                                                <div className="d-flex flex-wrap gap-1">
                                                    {field.required && <span className="badge bg-success">required</span>}
                                                    {field.constraint && <span className="badge bg-warning text-dark">{field.constraint}</span>}
                                                    {field.format && <span className="badge bg-secondary">format: {field.format}</span>}
                                                    {field.source && <span className="badge bg-info text-dark">{field.source}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {method.input.example && (
                                    <div className="mt-2">
                                        <h6>Input Example</h6>
                                        <div className="table-responsive">
                                            <pre className="bg-dark text-light p-3 rounded" style={{ fontSize: "0.8rem" }}>
                                                {JSON.stringify(method.input.example, null, 2)}
                                            </pre>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Output */}
                        {method.output?.type && (
                            <div className="mb-3">
                                <h6>
                                    Output — <code>{method.output.type}</code>
                                    {method.output.statusCode && (
                                        <span className="badge bg-success ms-2">{method.output.statusCode}</span>
                                    )}
                                </h6>
                                {method.output.example && (
                                    <div className="table-responsive">
                                        <pre className="bg-dark text-light p-3 rounded" style={{ fontSize: "0.8rem" }}>
                                            {JSON.stringify(method.output.example, null, 2)}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Exceptions */}
                        {method.exceptions && method.exceptions.length > 0 && (
                            <div className="mb-3">
                                <h6>Exceptions</h6>

                                {/* Tabela — md+ */}
                                <div className="table-responsive d-none d-md-block">
                                    <table className="table table-sm table-bordered">
                                        <thead className="table-danger">
                                            <tr>
                                                <th>Type</th>
                                                <th>Condition</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {method.exceptions.map((ex, i) => (
                                                <tr key={i}>
                                                    <td><code>{ex.type}</code></td>
                                                    <td className="text-muted small">{ex.condition}</td>
                                                    <td>{ex.statusCode && <span className="badge bg-danger">{ex.statusCode}</span>}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Cards — mobile */}
                                <div className="d-md-none">
                                    {method.exceptions.map((ex, i) => (
                                        <div className="card mb-2 border-danger shadow-sm" key={i}>
                                            <div className="card-body py-2">
                                                <div className="d-flex justify-content-between flex-wrap gap-1 mb-1">
                                                    <code className="text-danger">{ex.type}</code>
                                                    {ex.statusCode && <span className="badge bg-danger">{ex.statusCode}</span>}
                                                </div>
                                                <p className="text-muted small mb-0">{ex.condition}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rules */}
                        {method.rules && method.rules.length > 0 && (
                            <div>
                                <h6>Rules</h6>
                                <ul className="small">
                                    {method.rules.map((rule, i) => (
                                        <li key={i}>{rule}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            ))}

        </div>
    );
}