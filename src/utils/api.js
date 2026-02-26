const baseUrl = "https://fakestoreapi.com/products";

// export function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Error: ${res.status}`);
//   }
// }

// Fetch items from the API
export const getItems = () => {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.text().then((text) => {
      try {
        return JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response");
      }
    });
  });
};
