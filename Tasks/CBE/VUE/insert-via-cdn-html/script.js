// vue.createApp bedeutet, dass wir eine neue Vue-Instanz erstellen
// Vue-Instanz
Vue.createApp({
  // data ist eine Funktion, die ein Objekt zurückgibt
  data() {
    return {
      message: "Hello Vue.js!",
      count: 0,
    };
  },
  // methods ist ein Objekt
  methods: {
    // Funktionen, die aufgerufen werden können
    countUp() {
      this.count++;
    },
  },
  // Vue-Instanz wird an #app gemountet (angehängt)
}).mount("#app");
