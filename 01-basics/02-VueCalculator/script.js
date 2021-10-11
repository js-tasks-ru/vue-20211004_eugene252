import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      picked: '',
      firstValue: 0,
      secondValue: 0
    }
  },

  computed: {
    result() {
      switch (this.picked) {
        case 'sum':
          return +this.firstValue + +this.secondValue;
        case 'subtract':
          return this.firstValue - this.secondValue;
        case 'multiply':
          return this.firstValue * this.secondValue;
        case 'divide':
          return this.firstValue / this.secondValue;
      }
    }
  }
});

const app = createApp(RootComponent);
const vm = app.mount('#app');
