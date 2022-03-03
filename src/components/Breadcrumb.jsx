import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context/ProductContext";

export default function Breadcrumb() {
  // hooks
  const { categories } = useContext(ProductContext);
  // state
  const [stringBreascrumb, setStringBreascrumb] = useState("");

  // effect
  useEffect(() => {
    if (categories.length > 0) {
      let stringTemp = categories.slice(0, 3).join(" > ");
      setStringBreascrumb(stringTemp);
    }
  }, [categories, stringBreascrumb]);

  // render
  return <div className="breadcrumb">{stringBreascrumb}</div>;
}
