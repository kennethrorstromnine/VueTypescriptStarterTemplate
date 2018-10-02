import { mount } from "@vue/test-utils";
import ListPosts from "@/components/ListPosts.vue";
jest.mock("@/services/a.service"); // Mocker service med predifeneret svar


/**
 * Eksempel på test af Vue komponenter
 * læs evt. mere her https://vue-test-utils.vuejs.org/guides
 */

describe("Component ListPosts.vue", () => {
  const wrapper = mount(ListPosts); // mount = rendere alle komponenter

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("<h2>List Posts</h2>");
    // console.log(wrapper.html());
  });

  it("Next tick - mounted", () => {
    wrapper.vm.$nextTick(() => {  // Venter på async
      expect(wrapper.vm.$data.myList.length).toBe(2);
    });
  });

});
