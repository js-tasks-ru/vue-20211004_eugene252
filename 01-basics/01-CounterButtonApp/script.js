import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      count: 0
    }
  },
});

const app = createApp(RootComponent);
const vm = app.mount('#app');
