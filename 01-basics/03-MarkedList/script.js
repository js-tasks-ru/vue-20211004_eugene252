import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  data() {
    return {
      emails: [
        'Eliseo@gardner.biz',
        'Jayne_Kuhic@sydney.com',
        'Nikita@garfield.biz',
        'Lew@alysha.tv',
        'Hayden@althea.biz',
        'Presley.Mueller@myrl.com',
        'Dallas@ole.me',
        'Mallory_Kunze@marie.org',
        'Meghan_Littel@rene.us',
        'Carmen_Keeling@caroline.name',
        'Veronica_Goodwin@timmothy.net',
        'Oswald.Vandervort@leanne.org',
        'Kariane@jadyn.tv',
        'Nathan@solon.io',
        'Maynard.Hodkiewicz@roberta.com',
        'Christine@ayana.info',
        'Preston_Hudson@blaise.tv',
        'Vincenza_Klocko@albertha.name',
        'Madelynn.Gorczany@darion.biz',
        'Mariana_Orn@preston.org',
        'Noemie@marques.me',
        'Khalil@emile.co.uk',
        'Sophia@arianna.co.uk',
        'Jeffery@juwan.us',
        'Isaias_Kuhic@jarrett.net',
      ],

      query: ''
    }
  },

  computed: {
    resultList() {
      return this.emails.map(function(email) {
        return {
          email: email,
          marked: this.isMarked(email)
        }
      }.bind(this))
    }
  },

  methods: {
    isMarked(email) {
      return this.query && email.toLowerCase().includes(this.query.toLowerCase());
    }
  }
});

const app = createApp(RootComponent);
const vm = app.mount('#app');

