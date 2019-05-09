/* eslint-disable import/first */
jest.mock("axios");
import axios from "axios";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import list from "@/store/list";
import MyComponent from "@/components/MyComponent.vue";
import { mockItems } from "@/store/utils/utils-list";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  ...list
});

describe("MyComponent.vue", () => {
  const secret = "my secret message";
  const wrapper = mount(MyComponent, {
    propsData: { secret },
    store,
    localVue
  });
  it("does not render a span element", async () => {
    const firstItem = wrapper.find("span");
    expect(firstItem.exists()).toBe(false);
  });

  it("fetches and sets 10 items to the list, and renders the span", async () => {
    const fetchButton = wrapper.find("#fetch");
    const items = mockItems();
    // Mock-resolve an axios request
    axios.get.mockResolvedValue({ data: items });
    fetchButton.trigger("click");

    await localVue.nextTick();
    const firstItem = wrapper.find("span");
    expect(store.state.list).toHaveLength(10);
    expect(firstItem.exists()).toBe(true);
  });

  it("adds one item when #add is clicked", () => {
    const addButton = wrapper.find("#add");
    addButton.trigger("click");
    expect(store.state.list).toHaveLength(11);
  });
});
