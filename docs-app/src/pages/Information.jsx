import { useLocation } from "react-router-dom";

export default function Information() {
const location = useLocation();
  const { state } = useLocation();

  const data = state?.className;


  return (
    <>

    <div className="container">
      <h1>Information</h1>
      <p>This is the information page.</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>

</>
  ) }