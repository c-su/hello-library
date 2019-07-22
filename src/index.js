import store from './store';
import HelloWorld from './components/HelloWorld.vue';
import HelloText from './components/HelloText.vue';

export default {
  install(Vue) {
    const components = {
      HelloWorld,
      HelloText,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const [name, c] of Object.entries(components)) {
      Vue.component(name, c);
    }
  },
  installStore() {
    return store;
  },
};
