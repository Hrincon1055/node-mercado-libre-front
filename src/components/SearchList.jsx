import React from "react";
import { useNavigate } from "react-router-dom";
// Mis componentes
import Shipping from "../assets/images/shipping.png";
// Inicio
export default function SearchList({ product }) {
  const navigate = useNavigate();
  // funciones
  const handleClick = () => {
    navigate(`/items/${product.id}`);
  };

  // render
  return (
    <>
      <div className="search-list" onClick={handleClick}>
        <div style={{ width: "180px", height: "180px" }}>
          <img src={product.picture} alt={product.title} />
        </div>
        <div className="search-list-detail">
          <div className="search-list-detail-small">
            <div className="search-list-detail-small-price-content">
              <small className="search-list-detail-small-price">
                $ {product.price.amount}
              </small>
              {product.free_shipping && (
                <img
                  src={Shipping}
                  alt="Shipping"
                  className="search-list-detail-small-shipping"
                />
              )}
            </div>
            <small className="search-list-detail-small-country">
              {product.address}
            </small>
          </div>
          <p className="search-list-detail-small-text">{product.title}</p>
        </div>
      </div>
      <hr className="separator" />
    </>
  );
}
