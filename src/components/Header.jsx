import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Header = () => {
  const pathname = window.location.pathname;

  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/dum01.html" ? "active fw-bold" : ""
                  }`}
                  href="/dum01.html"
                >
                  Dům 1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/dum02.html" ? "active fw-bold" : ""
                  }`}
                  href="/dum02.html"
                >
                  Dům 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/dum03.html" ? "active fw-bold" : ""
                  }`}
                  href="/dum03.html"
                >
                  Dům 3
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/dum04.html" ? "active fw-bold" : ""
                  }`}
                  href="/dum04.html"
                >
                  Dům 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
