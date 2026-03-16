export default function DropDownMenu({ type, onSelect }) {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        {type}
      </a>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => onSelect(`${type}Class`)}>
            {type} Class
          </button>
        </li>

        <li>
          <button className="dropdown-item" onClick={() => onSelect(`${type}Repository`)}>
            {type} Repository
          </button>
        </li>

        <li>
          <button className="dropdown-item" onClick={() => onSelect(`${type}Controller`)}>
            {type} Controller
          </button>
        </li>

        <li>
          <button className="dropdown-item" onClick={() => onSelect(`${type}Service`)}>
            {type} Service
          </button>
        </li>
      </ul>
    </li>
  );
}