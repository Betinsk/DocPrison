export default function DropDownMenu({ type, onSelect }) {

  const options = ["Class", "Repository", "Controller", "Service"];

  return (
    <li className="nav-item dropdown w-100">

      <button
        className="nav-link dropdown-toggle w-100 text-start"
        data-bs-toggle="dropdown"
      >
        {type}
      </button>

      <ul className="dropdown-menu w-100">

        {options.map((opt) => (
          <li key={opt}>
            <button
              className="dropdown-item w-100 text-start"
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