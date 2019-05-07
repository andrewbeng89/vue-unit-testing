import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import list from "@/store/list";
import MyComponent from "@/components/MyComponent.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  ...list,
  state: {
    ...list.state,
    list: [{ foo: "bar" }]
  }
});

describe("MyComponent.vue", () => {
  it("renders props.secret when passed", () => {
    const secret = "my secret message";
    const wrapper = shallowMount(MyComponent, {
      propsData: { secret },
      store,
      localVue
    });
    expect(wrapper.find("pre").text()).toMatch(secret);
  });

  it("emits 'my-event' if btn is clicked", () => {
    const wrapper = shallowMount(MyComponent, {
      store,
      localVue
    });
    const btn = wrapper.find("#btn");
    btn.trigger("click");
    expect(wrapper.emitted()["my-event"].length).toBe(1);
  });

  it("prints the first item, two buttons, and 'secret'", () => {
    const wrapper = shallowMount(MyComponent, {
      store,
      localVue
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
