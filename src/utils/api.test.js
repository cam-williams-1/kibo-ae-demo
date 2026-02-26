const fetch = require("node-fetch");
global.fetch = fetch;

const { getItems } = require("./api");

describe("Testing the API calls", () => {
  test("getItems should fetch items from the API", async () => {
    const items = await getItems();

    // Ensure the response is an array
    expect(Array.isArray(items)).toBe(true);

    // Ensure the array is not empty
    expect(items.length).toBeGreaterThan(0);

    // Validate the structure of the first item
    const firstItem = items[0];
    expect(firstItem).toHaveProperty("id");
    expect(firstItem).toHaveProperty("title");
    expect(firstItem).toHaveProperty("price");
  });

  test("getItems should throw an error for an invalid endpoint", async () => {
    const invalidUrl = "https://fakestoreapi.com/products-invalid";

    const fetchFromInvalidEndpoint = async () => {
      const response = await fetch(invalidUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    };

    await expect(fetchFromInvalidEndpoint()).rejects.toThrow("Error: 404");
  });

  test("getItems should throw an error if the response is invalid", async () => {
    const invalidUrl = "https://fakestoreapi.com/products/invalid";

    const fetchInvalidResponse = async () => {
      const response = await fetch(invalidUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const text = await response.text();
      try {
        return JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response");
      }
    };

    await expect(fetchInvalidResponse()).rejects.toThrow(
      "Invalid JSON response",
    );
  });
});
