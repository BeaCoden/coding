Vue.createApp({
  data() {
    return {
      vueVersion: 3,
      text: "<p>Directives are special attributes with the <code>v-</code> prefix. Directive attribute values are expected to be <strong>a single JavaScript expression</strong> (with the exception of <code>v-for</code> and <code>v-on</code>, which will be discussed later). A directive's job is to reactively apply side effects to the DOM when the value of its expression changes. Let's review the example we saw in the introduction:</p>",
    };
  },
  mounted() {
    setInterval(() => {
      this.vueVersion++;
    }, 2000);
  },
});
