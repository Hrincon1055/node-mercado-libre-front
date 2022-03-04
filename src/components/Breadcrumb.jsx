import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./context/ProductContext";

export default function Breadcrumb() {
  // hooks
  const { categories } = useContext(ProductContext);
  // state
  const [stringBreascrumb, setStringBreascrumb] = useState("");
  // console.log(categories);

  // effect
  useEffect(() => {
    if (categories.length > 0) {
      let stringTemp = categories
        .slice(0, 3)
        .map((item) => item.name)
        .join(" > ");
      setStringBreascrumb(stringTemp);
    }
  }, [categories, stringBreascrumb]);

  // render
  return <div className="breadcrumb">{stringBreascrumb}</div>;
}
