import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import list from "@/store/list";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  ...list
});

describe("App.vue", () => {
  const wrapper = mount(App, {
    store,
    localVue
  });

  it("sets a secret when 'btn' is clicked", () => {
    const btn = wrapper.find("#btn");
    btn.trigger("click");
    expect(wrapper.vm.secret).not.toBe("");
  });
});
