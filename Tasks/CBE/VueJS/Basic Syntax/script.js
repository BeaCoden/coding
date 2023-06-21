// vue.createApp bedeutet, dass wir eine neue Vue-Instanz erstellen
// Vue-Instanz
const app = Vue.createApp({
  // data ist eine Funktion, die ein Objekt zurückgibt
  data() {
    return {
      message: "Hello Vue.js!", // message ist ein Property
      userName: "Bea", // userName ist ein Property
    };
  },
  // Vue-Instanz wird an #app gemountet (angehängt)
}).mount("#app");

console.log(app.userName);
