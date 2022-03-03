import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routesClient } from "../config/routes";
// Mis componentes
// rutas publicas
import Error404 from "../pages/Error404";

// Inicio
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesClient.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <route.Layout>
                  <route.Component />
                </route.Layout>
              }
            />
          );
        })}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
