/* eslint-disable import/first */
jest.mock("axios"); // eslint-disable-line
import axios from "axios";
import listStore from "./list";

const { mutations, getters, actions } = listStore;

const mockItems = () => {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({ foo: "bar" });
  }
  return items;
};

describe("Vuex list store", () => {
  it("Should add an item to the list", () => {
    const state = { list: [] };
    const item = { foo: "bar" };
    const expectedState = {
      list: [
        {
          foo: "bar"
        }
      ]
    };

    mutations.addItem(state, item);
    expect(state).toEqual(expectedState);
  });

  it("Should get an item from the list", () => {
    const state = {
      list: [{ foo: "bar" }]
    };
    const expectedItem = {
      foo: "bar"
    };

    const item = getters.getItem(state)(0);
    expect(item).toEqual(expectedItem);
  });

  it("Should add items to an empty list", async () => {
    const items = mockItems();
    // Mock-resolve an axios request
    axios.get.mockResolvedValue({ data: items });
    // Mock the commit function
      const commit = jest.fn(); // eslint-disable-line

    // Call fetchItems with page = 0
    await actions.fetchItems({ commit }, 0);
    expect(commit).toHaveBeenNthCalledWith(1, "setStatus", "loading");
    expect(commit).toHaveBeenNthCalledWith(2, "setItems", items);
    expect(commit).toHaveBeenNthCalledWith(3, "setStatus", "success");
  });

  it("Should add items to a populated list", async () => {});

  it("Should set an error status if the API errors", async () => {});
});
