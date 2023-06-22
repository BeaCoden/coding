Vue.createApp({
 data() {
  return {
   books: [
    {
     title: "Practical Rust Web Projects",
     isbn: "9781484265888",
     author: "Shing Lyu",
     publisher: "Apress",
     price: "$28.75",
     numPages: 256,
    },
    {
     title: "Using WebPagetest",
     isbn: "9781491902592",
     author: "Rick Viscomi, Andy Davies, Marcel Duran",
     publisher: "O'Reilly Media",
     price: "$25.80",
     numPages: 214,
    },
    {
     title: "Web Scraping with Python",
     isbn: "9781491910290",
     author: "Ryan Mitchell",
     publisher: "O'Reilly Media",
     price: "$14.00",
     numPages: 256,
    },
    {
     title: "High Performance Mobile Web",
     isbn: "9781491912553",
     author: "Maximiliano Firtman",
     publisher: "O'Reilly Media",
     price: "$7.00",
     numPages: 326,
    },
   ],
  };
 },
}).mount("#app");
