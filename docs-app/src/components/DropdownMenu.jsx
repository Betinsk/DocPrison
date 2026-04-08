export default function DropDownMenu({ type, onSelect }) {
  const options = ["Class", "Controller", "Service"];

  return (
    <li className="nav-item dropdown w-100 mb-2">

      <button
        className="nav-link dropdown-toggle w-100 text-start fw-semibold px-3 py-2 rounded"
        data-bs-toggle="dropdown"
        style={{ backgroundColor: "#a8a8a8" }}
      >
        {type}
      </button>

      <ul className="dropdown-menu w-100 shadow border-0 mt-1">

        {options.map((opt) => (
          <li key={opt}>
            <button
              className="dropdown-item py-2"
              onClick={() => onSelect(`${type}${opt}`)}
            >
              {type} {opt}
            </button>
          </li>
        ))}

      </ul>

    </li>
  );
}