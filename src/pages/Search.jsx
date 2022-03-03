import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
// Mis componentes
import SearchList from "../components/SearchList";
import { getProductsApi } from "../api/productApi";
import Loading from "../components/Loading";
import Breadcrumb from "../components/Breadcrumb";
import { ProductContext } from "../components/context/ProductContext";

// Inicio
export default function Search() {
  // state
  const [products, setProducts] = useState(null);
  // hooks
  const location = useLocation();
  const { setCategories } = useContext(ProductContext);

  // constants
  const { q } = queryString.parse(location.search);

  useEffect(() => {
    getProductsApi(q, 4)
      .then((response) => {
        if (response?.susecces) {
          setProducts(response.items);
          setCategories(response.categories);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        setProducts([]);
        setCategories([]);
        console.log(err);
      });
  }, [q]);
  // render
  if (!products) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumb />
      {products.length > 0 ? (
        <div className="card">
          {products.map((product) => (
            <SearchList key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </>
  );
}
