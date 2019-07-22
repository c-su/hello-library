import moduleA from './moduleA';
import moduleB from './moduleB';
import HelloWorld from './components/HelloWorld.vue';
import HelloText from './components/HelloText.vue';
import HelloTextText from './components/HelloTextText.vue';

export default {
  install(Vue) {
    const components = {
      HelloWorld,
      HelloText,
      HelloTextText,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const [name, c] of Object.entries(components)) {
      Vue.component(name, c);
    }
  },
  store: {
    moduleA,
    moduleB,
  },
};
