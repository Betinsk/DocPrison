import { useLocation } from "react-router-dom";

export default function Information() {

    const location = useLocation();
    const entity = location.state?.className;

    if (!entity) {
        return <h3 className="text-center mt-5">Nenhuma documentação encontrada</h3>;
    }

    return (
        <div className="container mt-4">

            {/* Cabeçalho */}
            <div className="mb-4">
                <h2 className="fs-3">{entity.entity}</h2>
                <p className="text-muted">{entity.description}</p>
                <div className="d-flex flex-wrap gap-2 mt-2">
                    {entity.table && (
                        <span className="badge bg-dark">
                            table: <code className="text-warning">{entity.table}</code>
                        </span>
                    )}
                    {entity.annotations && entity.annotations.map((ann, i) => (
                        <span key={i} className="badge bg-secondary">{ann}</span>
                    ))}
                </div>
            </div>

            {/* Herança */}
            {entity.inheritance && (
                <div className="alert alert-secondary mb-4">
                    <strong>Inheritance:</strong> <code>{entity.inheritance.strategy}</code>
                    <p className="mb-0 mt-1 small text-muted">{entity.inheritance.description}</p>
                </div>
            )}

            {/* Fields */}
            {entity.fields && entity.fields.length > 0 && (
                <div className="mb-4">
                    <h5 className="mb-3">Fields</h5>

                    {/* Tabela — md+ */}
                    <div className="table-responsive d-none d-md-block">
                        <table className="table table-bordered table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Field</th>
                                    <th>Type</th>
                                    <th>Nullable</th>
                                    <th>Unique</th>
                                    <th>Annotations</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entity.fields.map((field, i) => (
                                    <tr key={i}>
                                        <td><code>{field.name}</code></td>
                                        <td><code>{field.type}</code></td>
                                        <td>{field.nullable ? "—" : <span className="badge bg-danger">NOT NULL</span>}</td>
                                        <td>{field.unique ? <span className="badge bg-warning text-dark">UNIQUE</span> : "—"}</td>
                                        <td>
                                            <div className="d-flex flex-wrap gap-1">
                                                {field.annotations && field.annotations.map((ann, j) => (
                                                    <span key={j} className="badge bg-secondary" style={{ fontSize: "0.7rem" }}>{ann}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="text-muted small">{field.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cards — mobile */}
                    <div className="d-md-none">
                        {entity.fields.map((field, i) => (
                            <div className="card mb-3 shadow-sm" key={i}>
                                <div className="card-header bg-dark text-white d-flex align-items-center justify-content-between flex-wrap gap-1">
                                    <code className="text-warning">{field.name}</code>
                                    <code className="text-light">{field.type}</code>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-1 mb-2">
                                        {!field.nullable && <span className="badge bg-danger">NOT NULL</span>}
                                        {field.unique && <span className="badge bg-warning text-dark">UNIQUE</span>}
                                        {field.annotations && field.annotations.map((ann, j) => (
                                            <span key={j} className="badge bg-secondary" style={{ fontSize: "0.7rem" }}>{ann}</span>
                                        ))}
                                    </div>
                                    <p className="text-muted small mb-0">{field.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Relationships */}
            {entity.relationships && entity.relationships.length > 0 && (
                <div className="mb-4">
                    <h5 className="mb-3">Relationships</h5>

                    {/* Tabela — md+ */}
                    <div className="table-responsive d-none d-md-block">
                        <table className="table table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Type</th>
                                    <th>Target</th>
                                    <th>Cascade</th>
                                    <th>OrphanRemoval</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {entity.relationships.map((rel, i) => (
                                    <tr key={i}>
                                        <td><span className="badge bg-info text-dark">{rel.type}</span></td>
                                        <td><code>{rel.target}</code></td>
                                        <td><code>{rel.cascade}</code></td>
                                        <td>
                                            {rel.orphanRemoval
                                                ? <span className="badge bg-warning text-dark">true</span>
                                                : <span className="text-muted">false</span>}
                                        </td>
                                        <td className="text-muted small">{rel.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cards — mobile */}
                    <div className="d-md-none">
                        {entity.relationships.map((rel, i) => (
                            <div className="card mb-3 shadow-sm" key={i}>
                                <div className="card-header bg-dark text-white d-flex align-items-center justify-content-between flex-wrap gap-1">
                                    <span className="badge bg-info text-dark">{rel.type}</span>
                                    <code className="text-warning">{rel.target}</code>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap gap-1 mb-2">
                                        <span className="badge bg-secondary">cascade: {rel.cascade}</span>
                                        {rel.orphanRemoval
                                            ? <span className="badge bg-warning text-dark">orphanRemoval: true</span>
                                            : <span className="badge bg-secondary">orphanRemoval: false</span>}
                                    </div>
                                    <p className="text-muted small mb-0">{rel.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Example */}
            {entity.example && (
                <div className="mb-4">
                    <h5 className="mb-3">Example</h5>
                    <div className="table-responsive">
                        <pre className="bg-dark text-light p-3 rounded" style={{ fontSize: "0.8rem" }}>
                            {JSON.stringify(entity.example, null, 2)}
                        </pre>
                    </div>
                </div>
            )}

        </div>
    );
}