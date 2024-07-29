# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

- the element that triggered the event

- What is the effect of setting an element to `display: none`?

- it removes it from the document flow and not viewed

- What does the `element.matches()` method take as an argument and what does it return?

- it takes css selector as a string as an argument. it returns boolean

- How can you retrieve the value of an element's attribute?

- with the getAttribute method

- At what steps of the solution would it be helpful to log things to the console?

- each time a method or function is called, a new variable is formed or when conditional expression is evaluated

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

- an event listener would need to be added to each of the tab elements. each event listener would need to have the same call back function. **_I am not sure if I fully understand this question_**

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

- assign each of the view elements to its own variable. compare that variable to the event target. assign classes using className property accordingly

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
