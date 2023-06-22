Vue.createApp({
 data() {
  return {
   activeTab: 0,
   tabs: [
    { name: "Tab 1", content: "This is the content of Tab 1." },
    { name: "Tab 2", content: "This is the content of Tab 2." },
    { name: "Tab 3", content: "This is the content of Tab 3." },
   ],
  };
 },
 methods: {
  changeTab(index) {
   this.activeTab = index;
  },
 },
}).mount("#app");
