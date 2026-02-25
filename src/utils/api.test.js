import { getItems } from "./api";

// Mock the fetch API
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("API calls", () => {
  test("getItems should fetch items", async () => {
    const mockItems = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockItems,
    });

    const items = await getItems();
    expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    expect(items).toEqual(mockItems);
  });

  test("getItems should throw an error on failure", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(getItems()).rejects.toThrow("Error: 500");
  });
});
