import { shallowMount, createLocalVue } from '@vue/test-utils';
import ListPosts from '@/components/ListPosts.vue';
import BootstrapVue from 'bootstrap-vue';
import { specificService } from '@/services/a.service';

/**
 * Eksempel på test af Vue komponenter
 * læs evt. mere her https://vue-test-utils.vuejs.org/guides
 *
 * Servicen bliver mocket ved at bruge spyOn.
 */

const localVue = createLocalVue();
localVue.use(BootstrapVue); // Vi bruger bootstrap-vue i komponenten, så den skal registeres i vores lokale test

const response = {
  data: [
    { title: 'Kasper' },
    { title: 'Bo' },
  ],
};

let wrapper!: any;

describe.only('Component ListPosts.vue', () => {

  beforeAll(() => {
    /**
     * Mocker service kald.
     * Skal kaldes før shallowMount(aktivere lifecycle hooks)
     */
    spyOn(specificService, 'list').and.returnValue(Promise.resolve(response));

    wrapper = shallowMount(ListPosts, {
      localVue,
    });

  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('vises en liste');
  });

  it('Next tick - mounted', () => {
    wrapper.vm.$nextTick(() => {  // Venter på async
      expect(wrapper.vm.$data.myList.length).toBe(2);
    });
  });

  it('Next tick - Liste indeholder Anders', () => {
    wrapper.vm.$nextTick(() => {  // Venter på async
      const liste = [...wrapper.vm.$data.myList];
      expect(liste.find((x) => x.title === 'Kasper')).toBeDefined();
    });
  });

});
