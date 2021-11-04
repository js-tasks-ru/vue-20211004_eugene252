import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      default: '',
    },

    place: {
      type: String,
      default: '',
    },

    date: {
      type: String,
      default: '',
    }
  },

  computed: {
    formattedDate() {
      const date = new Date(this.date);
      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      return date.toLocaleDateString('en-US', options);
    },

    formattedDateTime() {
      const date = new Date(this.date);

      return date.toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formattedDateTime">{{ formattedDate }}</time>
      </li>
    </ul>`,
});
