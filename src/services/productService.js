import API_URL from "./api";

// GET Products
export async function getProducts() {

  const res = await fetch(
    `${API_URL}/products`
  );

  return await res.json();

}

// ADD Product
export async function addProduct(product) {

  const res = await fetch(
    `${API_URL}/products`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),

    }
  );

  return await res.json();

}

// DELETE Product
export async function deleteProduct(id) {

  const res = await fetch(
    `${API_URL}/products/${id}`,
    {
      method: "DELETE",
    }
  );

  return await res.json();

}

// STOCK MINUS (SALE)
export async function updateProductStock(
  id,
  quantity
) {

  const res = await fetch(
    `${API_URL}/products/stock`,
    {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        id,

        quantity,

      }),

    }
  );

  return await res.json();

}

// STOCK PLUS (ADD STOCK)
export async function addProductStock(
  id,
  quantity
) {

  const res = await fetch(
    `${API_URL}/products/add-stock`,
    {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        id,

        quantity,

      }),

    }
  );

  return await res.json();

}

// UPDATE SALE PRICE
export async function updateProductPrice(
  code,
  salePrice
) {

  const res = await fetch(
    `${API_URL}/products/price`,
    {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        code,

        salePrice,

      }),

    }
  );

  return await res.json();

}