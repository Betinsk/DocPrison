export default function MethodCard({ method }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
      <h2>Method or function:</h2>
      <p>{method.name}</p>
      <p><strong>Objective:</strong> {method.objective}</p>
      <p><strong>Description:</strong> {method.description}</p>
      <p><strong>Input:</strong> {JSON.stringify(method.input)}</p>
      <p><strong>Rules:</strong> {method.rules.join(', ')}</p>
    </div>
  );
}