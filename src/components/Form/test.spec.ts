import { shallowMount } from "@vue/test-utils";
import Component from "./index.vue";

import Answers from "./answers";

describe("form component", () => {
  test("fill out the form", async () => {
    const wrapper = shallowMount(Component);
    wrapper.find("[data-question]").setValue("Does this work?");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();
    expect(Answers).toContain(wrapper.find("[data-answer]").text());
  });
});
