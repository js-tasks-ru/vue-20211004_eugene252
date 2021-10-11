import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const RootComponent = defineComponent({
  data() {
    return {
      picked: '',
      currentMeetup: {}
    }
  },

  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    }
  },

  watch: {
    async picked() {
      this.currentMeetup = await this.fetchMeetupById(this.picked);
    }
  }
});

const app = createApp(RootComponent);
const vm = app.mount('#app');
