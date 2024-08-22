# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

- Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

- Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions.

- What is the purpose of state in React?

- A state variable to retain the data between renders.
  A state setter function to update the variable and trigger React to render the component again.

- Why can't we just maintain state in a local variable?

- because variables are reset between renders. No data is retained

- What two actions happen when you call a `state setter` function?

- update the state variable and trigger React to render the component again.

- When does the local `state variable` get updated with the new value?

- The updated value will not be available until the component is re-rendered.

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
