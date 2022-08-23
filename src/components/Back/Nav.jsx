import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <nav className="nav">
              <NavLink
                className="nav-link"
                to="/admin/"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Admin
              </NavLink>
              <NavLink
                className="nav-link"
                to="/admin/meistrai"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Meistrai
              </NavLink>
              <NavLink
                className="nav-link"
                to="/admin/servisai"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : null
                }
              >
                Servisai
              </NavLink>
              <NavLink
                className="nav-link"
                to="/">
                Front
              </NavLink>
              <NavLink
                className="nav-link"
                to="/logout">
                Logout
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;