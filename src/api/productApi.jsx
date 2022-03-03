import { baseUrl } from "../utils/constants";

export const getProductsApi = async (termino, limit = 20) => {
  try {
    const url = `${baseUrl}/items?q=${termino}&limit=${limit}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result ? result : null;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByIdApi = async (id) => {
  try {
    const url = `${baseUrl}/items/${id}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result ? result : null;
  } catch (error) {
    console.log(error);
  }
};
