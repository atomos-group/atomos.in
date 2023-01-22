import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);

  const logout = () => {
    sessionStorage.removeItem("isAdmin");
  };

  useEffect(() => {
    let admin = sessionStorage.getItem("isAdmin");
    if (admin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            <h4 style={{ color: "#fff", marginBottom: "5px" }}>Brand</h4>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  <p style={{ color: "#fff", marginBottom: "0px" }}>Home</p>
                </Link>
              </li>
              {isAdmin &&
                <li class="nav-item">
                  <Link to="/form" class="nav-link active">
                    <p style={{ color: "#fff", marginBottom: "0px" }}>
                      Update Details
                    </p>
                  </Link>
                </li>}
            </ul>
            <form class="d-flex" role="search">
              {isAdmin
                ? <Link to="/">
                    <button
                      class="btn btn-outline-success"
                      type="submit"
                      onClick={logout}
                    >
                      Log Out
                    </button>
                  </Link>
                : <Link to="/login">
                    <button class="btn btn-outline-success" type="submit">
                      Admin
                    </button>
                  </Link>}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
