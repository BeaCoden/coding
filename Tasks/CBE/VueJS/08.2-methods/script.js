Vue.createApp({
 data() {
  return {
   firstName: "John",
   lastName: "Doe",
  };
 },
 computed: {
  fullName() {
   return generateFullName(this.firstName, this.lastName);
  },
 },
 methods: {
  generateFullName(firstname, lastname) {
   return `${firstname} ${lastname}`;
  },
 },
}).mount("#app");
