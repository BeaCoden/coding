// vue.createApp bedeutet, dass wir eine neue Vue-Instanz erstellen
Vue.createApp({
  // Vue-Instanz
  data() {
    // data ist eine Funktion, die ein Objekt zurückgibt
    return {
      message: "Hello Vue.js!",
      count: 0,
    };
  },
  methods: {
    // methods ist ein Objekt
    countUp() {
      this.count++;
    },
  },
  // Vue-Instanz wird an #app gemountet (angehängt)
}).mount("#app");
