import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
// Mis componentes
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import { useForm } from "../../hooks/useForm";
export default function LayoutBasic({ children }) {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [{ termino }, handleInputChange] = useForm({ termino: q });
  // funciones
  const handleSharch = (e) => {
    e.preventDefault();
    if (termino.length === 0) {
      navigate("/");
    } else if (location.pathname === "/items/search") {
      navigate(`?q=${termino}`);
    } else {
      navigate(`/items/search?q=${termino}`);
    }
  };
  return (
    <>
      <header>
        <nav className="nav">
          <div className="contenedor">
            <form className="contenedor-shared" onSubmit={handleSharch}>
              <img
                src={Logo}
                alt="Logo"
                className="img-mercado-libre"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              />
              <input
                type="text"
                className="search-text"
                name="termino"
                placeholder="Nunca dejes de buscar"
                value={termino}
                onChange={handleInputChange}
              />
              <button className="search-button" type="submit">
                <img src={Search} alt="Search" />
              </button>
            </form>
          </div>
        </nav>
      </header>
      <div className="contenedor">{children}</div>
    </>
  );
}
