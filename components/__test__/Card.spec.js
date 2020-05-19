/* eslint-disable no-unused-vars */
import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import Card from '~/components/Card';
import { blogs } from '~/contents/blog.service';
import { date } from '~/plugins/date';

const localVue = createLocalVue();
localVue.prototype.$date = date;

describe('Card', () => {
  /** @type {Wrapper<Vue>} */
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: { blog: blogs[0] },
      localVue,
      stubs: ['nuxt-link']
    });
  });
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
