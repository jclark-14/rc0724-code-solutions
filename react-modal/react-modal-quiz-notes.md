# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

- to create pop-ups on the application

- How do you show and hide a modal dialog?

- with the .showModal() and .close() methods

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?

- You manipulate child components in React by passing them props. You can not do that with the dialog element because React needs complete control of the elements, so you much use a node reference with the useRef hook

- How do you call the dialog element's functions in React?

- My using the useRef hook to reference the dialog node. The use the dialog methods by using the current property of the reference object

- How can you render nested components or JSX elements in React?

- By using thing the children property in React.

function Card({ children }) {
return (

<div className="card">
{children}
</div>
);
}

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
