const baseUrl = "https://fakestoreapi.com/products";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

// Fetch items from the API
export const getItems = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
