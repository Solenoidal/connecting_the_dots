/* eslint-disable no-unused-vars */
import { mount, shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import Card from '~/components/Card.vue';
import { blogs } from '~/contents/blog.service.js';
import { date } from '~/plugins/date.js';

const localVue = createLocalVue();
localVue.prototype.$date = date;

describe('Card.vue', () => {
  /** @type {Wrapper<Vue>} */
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: { blog: blogs[0] },
      localVue,
      stubs: ['nuxt-link']
    });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  test('has title and description', () => {
    expect(wrapper.text()).toMatch(blogs[0].title);
    expect(wrapper.text()).toMatch(blogs[0].description);
  });

  test('has a card__header class', () => {
    expect(wrapper.get('.card__header').exists()).toBe(true);
  });

  test('has a card class', () => {
    expect(wrapper.get('.card').exists()).toBe(true);
  });
});
