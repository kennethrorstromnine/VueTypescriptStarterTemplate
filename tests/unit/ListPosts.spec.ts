import { shallowMount, createLocalVue } from '@vue/test-utils';
import ListPosts from '@/components/ListPosts.vue';
import BootstrapVue from 'bootstrap-vue';

jest.mock('@/services/a.service'); // Mocker service med predifeneret svar


/**
 * Eksempel på test af Vue komponenter
 * læs evt. mere her https://vue-test-utils.vuejs.org/guides
 *
 * Servicen bliver mocket ved at bruge https://jestjs.io/docs/en/manual-mocks
 */

const localVue = createLocalVue();
localVue.use(BootstrapVue); // Vi bruger bootstrap-vue i komponenten, så den skal registeres i vores lokale test

describe('Component ListPosts.vue', () => {

  const wrapper = shallowMount(ListPosts, {
    localVue,
  }); // mount = rendere alle komponenter

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('vises en liste');
    // console.log(wrapper.html());
  });

  it('Next tick - mounted', () => {
    wrapper.vm.$nextTick(() => {  // Venter på async
      expect(wrapper.vm.$data.myList.length).toBe(2);
    });
  });

  it('Next tick - Liste indeholder Anders', () => {
    wrapper.vm.$nextTick(() => {  // Venter på async
      const liste = [...wrapper.vm.$data.myList];
      expect(liste.find((x) => x.title === 'Anders')).toBeDefined();
    });
  });

});
