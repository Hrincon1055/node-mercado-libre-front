// Mis componentes

import { useState } from "react";
import { ProductContext } from "./components/context/ProductContext";
import { AppRoutes } from "./routes/AppRoutes";
import "./theme/styles.css";
// Inicio
function App() {
  // state
  const [categories, setCategories] = useState([]);
  // render
  return (
    <>
      <ProductContext.Provider value={{ categories, setCategories }}>
        <AppRoutes />
      </ProductContext.Provider>
    </>
  );
}

export default App;
