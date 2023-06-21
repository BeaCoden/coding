// vue.createApp bedeutet, dass wir eine neue Vue-Instanz erstellen
// Vue-Instanz
Vue.createApp({
  // data ist eine Funktion, die ein Objekt zurückgibt
  data() {
    return {
      message: "Hello Vue.js!", // message ist ein Property
      count: 0, // count ist ein Property
    };
  },
  // methods ist ein Objekt in jeder Vue-Instanz und enthält Methoden (Funktionen)
  methods: {
    // Funktionen, die aufgerufen werden können
    countUp() {
      this.count++;
    },
  },
  // Vue-Instanz wird an #app gemountet (angehängt)
}).mount("#app");
