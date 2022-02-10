import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'
import { dayOfTheWeek } from  '@/pages/index.vue'


describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})




test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});