# Task: Computed properties & Methods

In this task we use the `Computed properties & Methods`.
We are a book store. We want to display a list of O'Reilly Media books to our customers, and display each price with a discount of 20%.

![Example](example.png)

## Fulfill the following tasks

- [ ] Sources will be found in the `src` folder.
- The table head gets rendered with a `v-for`, based on the keys of the first element in the books array `Object.keys(books[0])`.
  - [ ] Use a computed property instead of wirting `Object.keys(books[0])` in the template.
- [ ] Use a `computed property` to only display Books from the `publisher` O'Reilly Media
  - Do NOT manipulate the data property!!!!!
- [ ] All prices should be displayed with a discount of 20%
  - [ ] Use a method to calculate and display reduced price after the original price

## Sample solution

<https://codepen.io/may17-the-typescripter/pen/abVzwra?editors=0010>
