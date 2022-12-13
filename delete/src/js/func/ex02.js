import barba from '@barba/core';
import gsap from 'gsap';

export default function barbaTest() {
  barba.init({
    transitions: [{
      name: 'default-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        })
      },

      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        })
      },
    }]
  });
}