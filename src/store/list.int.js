/**
 * @jest-environment node
 */
import listStore from "./list";

const { actions } = listStore;

describe("Integration of API with list store", () => {
  it("the API fetches items", async () => {
    const commit = jest.fn();
    await actions.fetchItems({ commit }, 0);
    expect(commit).toHaveBeenCalledTimes(3);
  });
});
