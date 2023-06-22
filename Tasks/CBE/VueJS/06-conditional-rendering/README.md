# Task: Conditional rendering

In this task we use the `conditional rendering` and `class binding`.
There exists a tab content block. It has two part the tab navigator and the content. The current active tab should be always in sync with the displayed content.

![Example](example.gif)

## Fulfill the following tasks

- [ ] Don't start from scratch! Sources will be found in the `src` folder of this directory.
- [ ] Use the data property `activeTab` to set a tab as active
- [ ] Use `v-on` directive to change the active tab after clicking one of the tabs.
- [ ] Use v-if to display the right content block.
- [ ] Use class binding to highlight the active tab with the css class `tab-box__nav-item--active`
- [ ] Content and tab should be always in sync.
- [ ] Display a excuse fallback text when there is no match for an active tab.
  - Could happen when `activeTab` is higher or lower than the amount of available tabs

## Sample solution

<https://codepen.io/may17-the-typescripter/pen/vYWBvop>
