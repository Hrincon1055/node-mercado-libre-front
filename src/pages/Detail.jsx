import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByIdApi } from "../api/productApi";
import Breadcrumb from "../components/Breadcrumb";

import Loading from "../components/Loading";

export default function Detail() {
  // state
  const [product, setProduct] = useState(null);
  // hooks
  const { id } = useParams();

  // effect
  useEffect(() => {
    getProductByIdApi(id)
      .then((response) => {
        if (response?.susecces) {
          setProduct(response.item);
        } else {
          setProduct({});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // render
  if (!product) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumb />
      <div className="card">
        <div className="detail-content">
          <div className="detail-content-img">
            <img src={product.picture} alt={product.title} />
          </div>
          <div className="content-car">
            <div className="content-car-detail">
              <small>
                {product.condition}
                {" - "}
                {product.sold_quantity} Vendidos
              </small>
              <div className="content-car-detail-title">{product.title}</div>
              <div className="content-car-detail-title-price">
                $ {product.price.amount.toFixed(0)}
              </div>
              <button>Comprar</button>
            </div>
          </div>
          <div>
            <div className="content-car-detail-subtitle">
              Descripción del producto
            </div>
            <div className="content-car-detail-subtitle-info">
              {product.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
